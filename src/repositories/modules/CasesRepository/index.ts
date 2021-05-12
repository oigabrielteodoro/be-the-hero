import { formatValue } from '~/libs/format';

import { api } from '~/services/api';

import CaseDTO from '~/dtos/CaseDTO';

import ICasesRepository from './dtos/ICasesRepository';

class CasesRepository implements ICasesRepository {
  public async getCases(limit?: number, page?: number): Promise<CaseDTO[]> {
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
}

export { CasesRepository };
