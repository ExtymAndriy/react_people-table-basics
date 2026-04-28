import React, { useEffect, useState } from 'react';
import { Person } from '../../types/Person';
import { getPeople } from '../../api';
import { PeopleTable } from '../PeopleTable';

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    getPeople().then(setPeople);
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>
      <PeopleTable
        people={people}
        selectedPerson={selectedPerson}
        onPersonSelect={setSelectedPerson}
      />
    </>
  );
};
