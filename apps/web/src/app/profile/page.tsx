import { Profile } from '@/widgets';
import { getServerSession } from 'next-auth';

import { authConfig } from '../api/auth/[...nextauth]/route';

export default async function Index() {
  const session = await getServerSession(authConfig);
  return <Profile session={session} />;
}
