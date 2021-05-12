import { FiTrash2 } from 'react-icons/fi';
import CaseCardProps from './dtos/CaseCardProps';

import { Container } from './styles';

export function CaseCard({ data }: CaseCardProps) {
  return (
    <Container>
      <button type="button">
        <FiTrash2 size={20} />
      </button>

      <strong>Caso:</strong>
      <span>{data.title}</span>

      <strong>Descrição:</strong>
      <span>{data.description}</span>

      <strong>Valor</strong>
      <span>{data.valueFormatted} reais</span>
    </Container>
  );
}
