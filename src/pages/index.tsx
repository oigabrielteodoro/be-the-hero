import { useEffect, useState } from 'react';

import CaseDTO from '~/dtos/CaseDTO';

import { Header } from '~/components/shared/Header';

import { CasesList, Container } from '~/styles/pages/Home';
import { getCases } from '~/services/modules/cases';
import { CaseCard } from '~/components/modules/Home/CaseCard';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [cases, setCases] = useState<CaseDTO[]>([]);

  useEffect(() => {
    getCases(4, 1)
      .then(loadedCases => {
        setCases(loadedCases);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Casos cadastrados</h1>

        <CasesList>
          {cases.map(caseItem => (
            <CaseCard key={caseItem.id} data={caseItem} />
          ))}
        </CasesList>
      </Container>
    </>
  );
}
