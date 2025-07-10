import os

# Hardcoded secret (Security Risk)
API_KEY = "12345-SECRET-KEY"

# Command injection vulnerability
def delete_file(filename):
    os.system("rm -rf " + filename)

# Unused variable (Maintainability issue)
def add(a, b):
    result = a + b
    return a + b

# Using assert for runtime checks (Security Risk in production)
def is_valid_user(user):
    assert user is not None, "User should not be None"
    return True
