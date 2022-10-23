import { Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IBlocks {
  avatarUrl: string;
  ownerLogin: string;
  description: string;
  repoName: string;
  starCount: number;
  language: string;
}

const Block = ({ avatarUrl, ownerLogin, description, repoName, starCount, language }: IBlocks) => {
  const stringShortener = (str: string, length: number) => {
    const dots = str.length > length ? '...' : '';
    return str.substring(0, length) + dots;
  };

  return (
    <Card style={{ height: '300px' }}>
      <CardHeader
        avatar={<Avatar alt='Remy Sharp' src={avatarUrl} />}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={ownerLogin}
        subheader={`Stars:${starCount} `}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {repoName}
        </Typography>
        <Typography gutterBottom variant='body1' component='div'>
          Language: {language}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {stringShortener(description, 200)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Block;
