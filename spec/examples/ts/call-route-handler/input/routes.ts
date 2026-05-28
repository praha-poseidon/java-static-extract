function auth(_req: unknown, _res: unknown, next: () => void) {
  next();
}

function updateUser() {
  return "ok";
}

const map = {
  patch(_path: string) {
    return "ignored";
  }
};

map.patch("/ignored");
router.patch("/users/:id", auth, updateUser);
