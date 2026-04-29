import React, { useEffect, useState } from 'react';
import { Person } from '../../types/Person';
import { getPeople } from '../../api';
import { PeopleTable } from '../PeopleTable';
import { Loader } from '../Loader';

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPeople()
      .then(peopleData => {
        setPeople(peopleData);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const showPeopleTable = !isLoading && !hasError && people.length > 0;
  const showNoPeopleMessage = !isLoading && !hasError && people.length === 0;
  const showLoadingError = !isLoading && hasError;

  return (
    <>
      <h1 className="title">People Page</h1>

      {isLoading && <Loader />}

      {showLoadingError && (
        <div className="notification is-danger" data-cy="peopleLoadingError">
          People loading error
        </div>
      )}

      {showNoPeopleMessage && (
        <div className="notification is-warning" data-cy="noPeopleMessage">
          No people
        </div>
      )}

      {showPeopleTable && (
        <PeopleTable
          people={people}
          selectedPerson={selectedPerson}
          onPersonSelect={setSelectedPerson}
        />
      )}
    </>
  );
};
