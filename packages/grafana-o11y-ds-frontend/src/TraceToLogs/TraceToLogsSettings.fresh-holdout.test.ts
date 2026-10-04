import { getTraceToLogsOptions, type TraceToLogsData } from './TraceToLogsSettings';

describe('getTraceToLogsOptions fresh holdout legacy custom query migration', () => {
  it('preserves an unseen legacy custom query and infers customQuery when the flag is absent', () => {
    const data = {
      tracesToLogs: {
        datasourceUid: 'splunk_fresh_uid',
        query: 'source=payments trace="$traceId"',
        filterBySpanID: true,
      },
    } as unknown as TraceToLogsData;

    expect(getTraceToLogsOptions(data)).toMatchObject({
      datasourceUid: 'splunk_fresh_uid',
      query: 'source=payments trace="$traceId"',
      customQuery: true,
      filterBySpanID: true,
    });
  });
});
