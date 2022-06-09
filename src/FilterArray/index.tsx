import { useMemo, useState } from 'react';

export function FilterArray() {
  const [busca, setBusca] = useState('');
  const apiTest = ['laranja', 'banana', 'maça', 'morango'];

  const fruitFilters = useMemo(() => {
    const searchToLawerCase = busca.toLowerCase();
    return apiTest.filter((fruit) =>
      fruit.toLowerCase().includes(searchToLawerCase)
    );
  }, [busca]);

  return (
    <div>
      <h1>Filter:</h1>
      <input
        placeholder="Digite aqui a fruta desejada"
        onChange={(ev: { target: { value: string } }) =>
          setBusca(ev.target.value)
        }
      />

      <ul>
        {fruitFilters.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
