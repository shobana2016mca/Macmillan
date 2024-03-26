'use server';

import { actionResponse } from './helpers';

export async function updateUser() {
  try {
    return actionResponse('success', 'User updated');
  } catch (err) {
    return actionResponse('fail', 'Error updating user');
  }
}

export async function setUserRole() {
  try {
    return actionResponse('success', 'User role updated');
  } catch (err) {
    return actionResponse('fail', 'Error updating user role');
  }
}
