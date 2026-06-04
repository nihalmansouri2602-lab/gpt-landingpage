import os

# folders to ignore
IGNORE_DIRS = {
    "venv",
    ".venv",
    "__pycache__",
    ".git",
    "node_modules",
    ".idea",
    ".vscode",
    "dist",
    "build",
    ".next",
    ".cache"
}

# files to ignore
IGNORE_FILES = {
    ".DS_Store"
}

def print_tree(start_path, prefix=""):
    items = sorted(os.listdir(start_path))

    for i, item in enumerate(items):
        path = os.path.join(start_path, item)

        if item in IGNORE_DIRS or item in IGNORE_FILES:
            continue

        connector = "└── " if i == len(items) - 1 else "├── "

        print(prefix + connector + item)

        if os.path.isdir(path):
            extension = "    " if i == len(items) - 1 else "│   "
            print_tree(path, prefix + extension)

if __name__ == "__main__":
    project_path = "."  # current folder
    print_tree(project_path)