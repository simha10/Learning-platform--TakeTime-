import { DomainCard } from './DomainCard';

export function DomainGrid({ domains, onDomainClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {domains.map((domain, index) => (
        <DomainCard
          key={domain.id}
          domain={domain}
          onClick={onDomainClick}
          index={index}
        />
      ))}
    </div>
  );
}