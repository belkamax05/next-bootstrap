import { consoleLogSpy } from '@/utils/test-utils/spy/console';
import MockDate from 'mockdate';
import { getDateTime, logger } from '.';

describe('utils', () => {
  describe('logger', () => {
    const testTimestamp = 1434319925275;
    const message = 'Test message';
    const serverity = 'E';
    const testDateTemp = new Date(testTimestamp);
    const testDate = getDateTime(testDateTemp);
    const requestUUID = 'test-request-uuid';
    beforeAll(() => {
      MockDate.set(testTimestamp);
      consoleLogSpy.mockImplementation(jest.fn());
    });

    afterAll(() => {
      MockDate.reset();
    });

    describe('without serverity and without requestUUID', () => {
      it('should console log the correct date and the message and the severity', () => {
        logger(`${message}`);
        expect(console.log).toHaveBeenCalledWith(`${testDate} unknown I ${message}\n`);
      });
    });

    describe('with serverity', () => {
      it('should console log the correct date and the message and the severity', () => {
        logger(`${message}`, serverity, requestUUID);
        expect(console.log).toHaveBeenCalledWith(
          `${testDate} ${requestUUID} ${serverity} ${message}\n`,
        );
      });
    });
  });
});
