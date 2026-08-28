import { v4 as uuidv4 } from 'uuid';

export interface AparatHomeItem {
  id: string;
  audioUrl: string;
}

export const aparatHomeItems: AparatHomeItem[] = [
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/wkc9e5t?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/doui2t0?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/jdc29v2?refererRef=channel_page',
  },
];

export const aparatAboutItems: AparatHomeItem[] = [
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/les7p81?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/xno48zl?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/xus7ule?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/uuf5584?refererRef=channel_page',
  },
  {
    id: uuidv4(),
    audioUrl: 'https://www.aparat.com/v/doui2t0?refererRef=channel_page',
  },
];
