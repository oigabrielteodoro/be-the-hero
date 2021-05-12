import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import CaseDTO from '~/dtos/CaseDTO';

import { Header } from '~/components/shared/Header';
import { CaseCard } from '~/components/modules/Home/CaseCard';

import { CasesRepository } from '~/repositories/modules/CasesRepository';

import { CasesList, Container } from '~/styles/pages/Home';

export default function Home() {
  const observer = useRef<any>(null);

  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [filteredCases, setFilteredCases] = useState<CaseDTO[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const loadData = useCallback(async (page: number) => {
    const { getCases } = new CasesRepository();

    try {
      const casesWithPagination = await getCases(4, page);

      if (casesWithPagination.length <= 0) {
        setHasMore(false);
        return;
      }

      setFilteredCases(prevState => [...prevState, ...casesWithPagination]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(currentPage);
  }, [currentPage, loadData]);

  const lastCaseElementRef = useCallback(
    (node: ReactNode) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage(prevState => prevState + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Casos cadastrados</h1>

        <CasesList>
          {filteredCases.map(caseItem => (
            <CaseCard key={caseItem.id} data={caseItem} />
          ))}
        </CasesList>

        <div ref={lastCaseElementRef} />
      </Container>
    </>
  );
}
