import espotApiSpy from '@/utils/api/amplience/espotApi/index.spy';
import categoryHierarchyApiSpy from '@/utils/api/endpoint/categoryHierarchyApi/index.spy';
import catalogHierarchyAppData from '@/utils/constants/mocks/endpoints/catalogHierarchyAppData';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('algoliasearch', (key, id, ...props) => ({
  __esModule: true,
  default: jest.fn(),
  addAlgoliaAgent: jest.fn(),
}));

HTMLCanvasElement.prototype.getContext = () => null;

espotApiSpy.useEspot.mockReturnValue({ content: null, isLoading: false });

categoryHierarchyApiSpy.useFetch.mockReturnValue({
  data: { catalogHierarchy: catalogHierarchyAppData },
});
