import Validator from "../validator";

test("checkValidator", () => {
  const username = new Validator("user-123_user");
  expect(username.validateUsername()).toBeTruthy();
});

test("checkValidator", () => {
  const username = new Validator("user-1234_user");
  expect(username.validateUsername()).toBeFalsy();
});

test("checkValidator", () => {
  const username = new Validator("_user-123user-");
  expect(username.validateUsername()).toBeFalsy();
});

test("checkValidator", () => {
  const username = new Validator("Пользователь");
  expect(username.validateUsername()).toBeFalsy();
});
