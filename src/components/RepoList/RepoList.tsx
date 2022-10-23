import { Box, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Block from '../Blocks/Block';

interface IRepos {
  name: string;
  stargazers_count: number;
  owner: IOwner;
  description: string;
  language: string;
}

interface IOwner {
  avatar_url: string;
  login: string;
}

const fetchUsers = async (page: number, lang: string = '') => {
  /*
    Some Issue Found on the Endpoint where actually uses inconsistent language. 
    This is a known issue where github explains 
    here: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-repository-languages
   */
  const url = `https://api.github.com/search/repositories?q=+language='${lang}'&sort=stars&order=desc&page=${page}`;

  const res = await fetch(url);
  return res.json();
};

const Pagination = ({ programmingLanguage }: { programmingLanguage: string }) => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, isFetching } = useQuery(
    ['users', page, programmingLanguage],
    () => fetchUsers(page, programmingLanguage),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  /* 
    to show message when error occurs.
    the best practice is to use error logger to track errors
   */
  if (isError) {
    return <h2>Something Went Wrong </h2>;
  }

  // Intended code to identify rate limit error
  if (data.message) {
    return <h2>{data.message}</h2>;
  }

  return (
    <Box>
      {data && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              onClick={() => setPage((prevState) => Math.max(prevState - 1, 0))}
              disabled={page === 1}
            >
              Prev Page
            </Button>

            <Button variant='contained' onClick={() => setPage((prevState) => prevState + 1)}>
              Next Page
            </Button>

            <Box>{isFetching ? 'Fetching...' : null}</Box>
          </Grid>
          {data?.items?.map((repoData: IRepos, i: number) => (
            <Grid item lg={3} xs={12} key={`rep${i}`}>
              <Block
                ownerLogin={repoData?.owner.login}
                description={repoData?.description}
                language={repoData?.language}
                starCount={repoData?.stargazers_count}
                repoName={repoData?.name}
                avatarUrl={repoData?.owner.avatar_url}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Pagination;
