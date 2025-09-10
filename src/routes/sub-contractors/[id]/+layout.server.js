export const ssr = false;

import { redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
 // const user = locals.user;
 const user = {
    id: 3,
    role: 'subcontractor' // 'admin' | 'contractor' | 'subcontractor'
  };
  if (!user) throw redirect(302, '/login');

  const subId = params.id;

  if (user.role === 'subcontractor') {
    if (String(user.id) !== subId) {
      throw redirect(302, '/unauthorized');
    }
  } else if (user.role !== 'admin') {
    throw redirect(302, '/unauthorized');
  }

  return { user, subId };
}