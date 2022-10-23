import { Grid } from '@mui/material';
import { useState } from 'react';
import Filter from '../../components/Filter/Filter';
import RepoList from '../../components/RepoList/RepoList';

const Main = () => {
  const [lang, setLang] = useState<string>('');

  return (
    <Grid container spacing={2} p={10}>
      <Grid item xs={12}>
        <Filter setLanguage={setLang} language={lang} />
      </Grid>
      <Grid item xs={12}>
        <RepoList programmingLanguage={lang} />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Main;
