// create a method which will get firebase error code and return a user friendly message

export const firebaseErrors = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Email address is invalid.';
    case 'auth/user-disabled':
      return 'User is disabled.';
    case 'auth/user-not-found':
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Wrong password.';
    case 'auth/email-already-in-use':
      return 'Email already in use.';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed.';
    case 'auth/weak-password':
      return 'Weak password.';
    default:
      return 'Something went wrong.';
  }
};
