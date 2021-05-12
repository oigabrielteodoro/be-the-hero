import CaseDTO from '~/dtos/CaseDTO';
import { formatValue } from '~/libs/format';

import { api } from '~/services/api';

export async function getCases(limit?: number, page?: number): Promise<CaseDTO[]> {
  const response = await api.get<CaseDTO[]>('/cases', {
    params: {
      _limit: limit,
      _page: page,
    },
  });

  const data = response.data.map(caseItem => ({
    ...caseItem,
    valueFormatted: formatValue(caseItem.value),
  }));

  return data;
}
