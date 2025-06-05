import capitaliseFirstLetter from '@/utils/helpers/strings/capitaliseFirstLetter';
import formatWithNoSpaces from '@/utils/helpers/strings/formatWithNoSpaces';
import formatWithSpaces from '@/utils/helpers/strings/formatWithSpaces';
import removeAmpersand from '@/utils/helpers/strings/removeAmpersand';
import splitString from '@/utils/helpers/strings/splitString';
import {
  buildLeadTimeFilterForAlgoliaRequest,
  countSelectedFilters,
  extractStartAndEndLeadTimeFilter,
  getLeadTimeFilters,
  getMaxSizeHeightNumericFilters,
  splitFiltersNumericAndNonNumeric,
} from '.';

const leadTimFacets = {
  '0': 26,
  '7': 19,
  '14': 1,
  '21': 36,
  '28': 376,
  '35': 5095,
  '42': 157,
  '49': 4595,
  '56': 163,
} as const;

type currentFilters = {
  current: {
    [key: string]: string[];
  };
};

describe('algolia path format helpers', () => {
  it('splitString: should return an array of strings based on `_` and `-` character split', () => {
    expect(splitString('my-test_url-path')).toEqual(['my', '-', 'test', '_', 'url', '-', 'path']);
  });
  it('splitString: should a string array when NO `_` and `-` character split', () => {
    expect(splitString('mytesturlpath')).toEqual(['mytesturlpath']);
  });

  it('capitaliseFirstLetter: should capitalise the first letter of every array word', () => {
    expect(capitaliseFirstLetter(['my', '-', 'test', '_', 'url', '-', 'path'])).toEqual([
      'My',
      '-',
      'Test',
      '_',
      'Url',
      '-',
      'Path',
    ]);
  });
  it('formatWithSpaces: should return a string with space separated words', () => {
    expect(formatWithSpaces(['my', '-', 'test', '_', 'url', '-', 'path'])).toBe('my test url path');
  });

  it('formatWithSpaces: should return a string with NO space separated words', () => {
    expect(formatWithNoSpaces(['my', '-', 'test', '_', 'url', '-', 'path'])).toBe('mytesturlpath');
  });

  test.each`
    input                              | output
    ${'my&test&&path'}                 | ${'mytestpath'}
    ${['my&test', '&', 'path', '&']}   | ${'mytestpath'}
    ${[['my&test'], '&', 'path', '&']} | ${'mytest'}
  `('removesAmpersand: should return a string with NO ampersand words', ({ input, output }) => {
    expect(removeAmpersand(input)).toBe(output);
  });

  describe('getLeadTimeFilters', () => {
    const input = [
      {
        filterString: '0-7|0-14|0-21|22-1000',
        result: [
          { end: '7', label: 'Less than 8 days', start: '0' },
          { end: '14', label: 'Less than 15 days', start: '0' },
          { end: '21', label: 'Less than 22 days', start: '0' },
          { end: '1000', label: '22 days and over', start: '22' },
        ],
      },
      {
        filterString: '0-14|0-28|0-42|43-1000',
        result: [
          { end: '14', label: 'Less than 15 days', start: '0' },
          { end: '28', label: 'Less than 29 days', start: '0' },
          { end: '42', label: 'Less than 43 days', start: '0' },
          { end: '1000', label: '43 days and over', start: '43' },
        ],
      },
    ] as const;

    it.each`
      filterString             | result             | facet
      ${input[0].filterString} | ${input[0].result} | ${leadTimFacets}
      ${input[1].filterString} | ${input[1].result} | ${leadTimFacets}
    `(
      'should return valid list of filters',
      ({ filterString, result, facet }: { filterString: string; result; facet }) => {
        expect(getLeadTimeFilters(filterString.split('|'), facet)).toStrictEqual(result);
      },
    );
  });

  describe('extractStartAndEndLeadTimeFilter', () => {
    it.each`
      input                               | result
      ${[['leadTime:Less than 8 days']]}  | ${[[0, 7]]}
      ${[['leadTime:Less than 15 days']]} | ${[[0, 14]]}
      ${[['leadTime:22 days and over']]}  | ${[[22, 1000]]}
      ${[['colour:random colour']]}       | ${[]}
      ${[['colour:5-7 weeks']]}           | ${[]}
      ${['colour:random colour']}         | ${[]}
    `(
      'should return $result with leadTimeStart and leadTimeEnd given $input',
      ({ input, result }) => {
        expect(extractStartAndEndLeadTimeFilter(input)).toEqual(result);
      },
    );
  });

  describe('buildLeadTimeFilterForAlgoliaRequest', () => {
    it('should return valid leadTime Filter for algolia request body', () => {
      const filters: [number, number][] = [
        [0, 14],
        [0, 21],
        [22, 1000],
      ];

      const result = buildLeadTimeFilterForAlgoliaRequest(filters);

      expect(result).toEqual([
        ['leadTime>=0', 'leadTime<=14'],
        ['leadTime>=0', 'leadTime<=21'],
        ['leadTime>=22', 'leadTime<=1000'],
      ]);
    });
  });

  describe('getMaxSizeHeightNumericFilters', () => {
    it.each`
      input                                    | result
      ${['maxSize:500', 'heightFrom:700']}     | ${[]}
      ${[['maxSize:500'], ['heightFrom:700']]} | ${['maxSize<=500', 'heightFrom<=700']}
      ${[['maxSize:500']]}                     | ${[]}
      ${[[]]}                                  | ${[]}
      ${undefined}                             | ${[]}
    `(
      'should return valid maxSize and heightFrom numeric filters for algolia request body',
      ({ input, result }) => {
        expect(getMaxSizeHeightNumericFilters(input)).toEqual(result);
      },
    );
  });

  describe('splitFiltersNumericAndNonNumeric', () => {
    it('should split numeric filter and non numeric filters', () => {
      const filters = [
        ['maxSize:500'],
        ['heightFrom:700'],
        ['leadTime:Less than 22 days'],
        ['randomNonNumericFilter:value'],
      ];

      expect(splitFiltersNumericAndNonNumeric(filters)).toEqual([
        [['randomNonNumericFilter:value']],
        ['leadTime>=0', 'leadTime<=21', 'maxSize<=500', 'heightFrom<=700'],
      ]);
    });
  });

  describe('countSelectedFilters', () => {
    it('should count the number of applied filters', () => {
      const noFilters: currentFilters = {
        current: {},
      };

      const singleFilters: currentFilters = {
        current: {
          colourGroup: ['Oranges', 'Blues'],
        },
      };

      const multiFilters: currentFilters = {
        current: {
          colourGroup: ['Oranges', 'Blues'],
          productSize: ['3 Seater'],
        },
      };

      expect(countSelectedFilters(noFilters)).toEqual(0);
      expect(countSelectedFilters(singleFilters)).toEqual(2);
      expect(countSelectedFilters(multiFilters)).toEqual(3);
    });
  });
});
