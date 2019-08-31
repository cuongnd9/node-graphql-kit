import userService from '@/services/user.service';

async function list(req, res) {
  const users = await userService.getUsers();
  res.json(users);
}

async function retrieve(req, res) {
  const { id } = req.params;
  const user = await userService.getUser(id);
  res.json(user);
}

async function create(req, res) {
  const newUser = await userService.createUser(req.body);
  res.json(newUser);
}

async function update(req, res) {
  const { id } = req.params;
  const updatedUser = await userService.updateUser(id, req.body);
  res.json(updatedUser);
}

async function destroy(req, res) {
  const { id } = req.params;
  const deletedUser = await userService.deleteUser(id);
  res.json(deletedUser);
}

export default {
  list,
  retrieve,
  create,
  update,
  destroy
};
