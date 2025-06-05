import { LeadTimeFilter } from '@/types';
import { DELIVERY_LEAD_TIME_FILTER_NAMESPACE } from '@/utils/constants/app/constants';
import partition from 'lodash.partition';

export const getLeadTimeFilters = (
  xcomregLeadTimeFilter: string[],
  facet: Record<string, number>,
): LeadTimeFilter[] => {
  const leadTimeScales = xcomregLeadTimeFilter ? xcomregLeadTimeFilter : [];
  const stockLeadTimes: LeadTimeFilter[] = [];
  leadTimeScales.forEach((leadTime) => {
    const start = leadTime.split('-')[0];
    const end = leadTime.split('-')[1];
    let label = '';

    if (end === '1000') {
      label = `${start} days and over`;
      stockLeadTimes.push({
        start,
        end,
        label,
      });
    } else {
      label = `Less than ${Number(end) + 1} days`;
      stockLeadTimes.push({
        start,
        end,
        label,
      });
    }
  });
  // all possible lead time filters from algolia request in weeks
  const validDaysInWeeksLeadTimeFilterFromAlgolia = Object.keys(facet)
    .map((days) => Number(days))
    .sort((days1, days2) => days1 - days2);
  const validFilters = stockLeadTimes.filter((filter) => {
    if (filter.label.includes('over')) {
      const plusFilters = validDaysInWeeksLeadTimeFilterFromAlgolia.filter(
        (val) => val >= Number(filter.start),
      );
      return !!plusFilters.length;
    }

    if (!filter.start || isNaN(Number(filter.start))) {
      return validDaysInWeeksLeadTimeFilterFromAlgolia.includes(Number(filter.end));
    }

    const rangeBetweenStartAndEnd = validDaysInWeeksLeadTimeFilterFromAlgolia.filter(
      (val) => val >= Number(filter.start) && val <= Number(filter.end),
    );
    return !!rangeBetweenStartAndEnd.length;
  });
  return validFilters;
};

export const extractStartAndEndLeadTimeFilter = (
  numericFilters: string[][],
): [number, number][] => {
  const leadTimeFilters: [number, number][] = [];
  const isArrayOfArrays =
    numericFilters &&
    Array.isArray(numericFilters) &&
    numericFilters[0] &&
    Array.isArray(numericFilters[0]);
  if (isArrayOfArrays) {
    const leadTimeFilterTexts = numericFilters.filter(
      (filter: string[]) =>
        !!filter.find(
          (innerFilter) => innerFilter.indexOf(DELIVERY_LEAD_TIME_FILTER_NAMESPACE) >= 0,
        ),
    );
    leadTimeFilterTexts[0]?.forEach((filter) => {
      if (filter && filter.indexOf(DELIVERY_LEAD_TIME_FILTER_NAMESPACE) >= 0) {
        let leadTimes: string[] = [];
        const label = filter.split(':')[1];
        const days = label.replace(/\D/g, '');
        if (label.indexOf('over') >= 0) leadTimes = [days, '1000'];
        else leadTimes = ['0', (Number(days) - 1).toString()];

        const convertedEndNumber = Number(leadTimes[1]);
        leadTimeFilters.push([
          Number(leadTimes[0]),
          isNaN(convertedEndNumber) ? 0 : convertedEndNumber,
        ]);
      }
    });
  }
  return leadTimeFilters;
};

export const buildLeadTimeFilterForAlgoliaRequest = (filters: [number, number][]): string[][] => {
  const requestParams: string[][] = [];
  filters.forEach(([start, end]) => {
    requestParams.push([
      `${DELIVERY_LEAD_TIME_FILTER_NAMESPACE}>=${start}`,
      `${DELIVERY_LEAD_TIME_FILTER_NAMESPACE}<=${end}`,
    ]);
  });
  return requestParams;
};

export const getMaxSizeHeightNumericFilters = (numericFilters): string[] => {
  const result: string[] = [];
  numericFilters &&
    Array.isArray(numericFilters) &&
    numericFilters.forEach((filter) => {
      if (Array.isArray(filter) && filter[0]) {
        if (filter[0].indexOf('maxSize') >= 0) {
          const maxSize = filter[0]?.split(':')[1];
          result[0] = `maxSize<=${maxSize}`;
        }
        if (filter[0].indexOf('heightFrom') >= 0) {
          const heightFrom = filter[0]?.split(':')[1];
          result[1] = `heightFrom<=${heightFrom}`;
        }
      }
    });
  return result[0] && result[1] ? result : [];
};

export const splitFiltersNumericAndNonNumeric = (
  facetFilters: string[][],
): [string[] | string[][], string[] | string[][]] => {
  const [nonNumericFilters, numericFilters] = partition(
    facetFilters,
    (facetFilter: string[]) =>
      facetFilter?.[0]?.indexOf('heightFrom') === -1 &&
      facetFilter?.[0]?.indexOf('maxSize') === -1 &&
      facetFilter?.[0]?.indexOf(DELIVERY_LEAD_TIME_FILTER_NAMESPACE) === -1,
  );

  const maxSizeHeightNumericFilter = getMaxSizeHeightNumericFilters(numericFilters) || [];

  const leadTimeFilters = extractStartAndEndLeadTimeFilter(numericFilters);
  const leadTimeNumericFilters = buildLeadTimeFilterForAlgoliaRequest(leadTimeFilters);
  const numericLeadTimeFilter = leadTimeNumericFilters.length
    ? leadTimeNumericFilters.length === 1
      ? leadTimeNumericFilters[0]
      : leadTimeNumericFilters
    : [];

  const validNumericFilters = [...numericLeadTimeFilter, ...maxSizeHeightNumericFilter];

  return [nonNumericFilters, validNumericFilters as string[] | string[][]];
};

export const countSelectedFilters = (filtersObject: {
  current: { [key: string]: string[] };
}): number => {
  const { current } = filtersObject;
  let totalFilters = 0;

  if (!current) return totalFilters;

  Object.keys(current).forEach((key) => {
    totalFilters += current[key].length;
  });

  return totalFilters;
};

export const getActiveFilters = (activeFilters: [string, string[]][]) => {
  return activeFilters.map(([filter, values = []]: [string, string[]]) =>
    values?.map((value) => `${filter}:${value}`),
  );
};
