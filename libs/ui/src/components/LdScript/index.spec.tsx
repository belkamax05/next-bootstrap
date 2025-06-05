import { SchemaOrgBase } from '@/types';
import { render } from '@/ui/utils/test-utils';
import headSpy from '@/utils/test-utils/spy/next/headSpy';
import LdScript, { LdScriptProps } from '.';

headSpy.mockImplementation(({ children }) => <div data-testid="head-spy">{children}</div>);

describe('LdScript Component', () => {
  const testProps: LdScriptProps<SchemaOrgBase> = {
    data: {
      '@type': 'Organization',
      '@context': 'https://schema.org',
    },
  };

  it('should not render script, when no content provided', () => {
    const { queryByTestId } = render(<LdScript {...({} as LdScriptProps)} />);
    expect(queryByTestId('schema-org-script')).toBeNull();
  });

  it('should render script, when content provided', () => {
    const { queryByTestId } = render(<LdScript {...testProps} />);
    expect(queryByTestId('schema-org-script')).not.toBeNull();
  });
});
