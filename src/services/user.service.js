import { prisma } from '@/models/prisma-client';

function getUsers() {
  return prisma.users();
}

function getUser(id) {
  return prisma.user({ id });
}

function createUser(data) {
  return prisma.createUser(data);
}

function updateUser(user) {
  const { id, ...data } = user;
  return prisma.updateUser({
    where: { id },
    data,
  });
}

function deleteUser(id) {
  return prisma.deleteUser({ id });
}

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
