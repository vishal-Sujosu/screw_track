export const ssr = false;

// src/routes/contractor/[id]/+layout.server.js
import { redirect } from '@sveltejs/kit';

export async function load({ locals, params }) {
  //const user = locals.user; // set in hooks.server.js
  const user = {
    id: 2,
    role: 'admin' // 'admin' | 'contractor' | 'subcontractor'
  };
  if (!user) throw redirect(302, '/login');

  const contractorId = params.id;

  if (user.role === 'admin') {
    // contractor can only access their own id
    // if (String(user.id) !== contractorId) {
    //   throw redirect(302, '/unauthorized');
    // }
  } else if (user.role !== 'admin') {
    // subcontractor cannot enter contractor routes
    throw redirect(302, '/unauthorized');
  }

  return { user, contractorId };
}
