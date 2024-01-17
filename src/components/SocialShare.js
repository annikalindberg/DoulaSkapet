import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import { Box, Typography } from '@mui/material';

export const SocialShare = ({ url, title }) => 

    (
    <Box sx={{
        display: 'flex',
        justifyContent: 'flexStart',
        alignItems: 'center',
        gap: 2,

  }} >
    <Typography variant='paragraph' sx={{  }}>Dela sidan </Typography>
    <FacebookShareButton url={url} quote={title}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  </Box>
);
    
