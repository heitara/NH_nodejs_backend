# Useful git commands

To create a local git repository use the following command:

```bash
git init
```

Here is how to add a file to git:

```bash
git add your.file
```

Here is how to commit a change to local git repo:

```bash
git commit -m "feat: describe your commit"
```
> You can read mode about [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

With the following command you can clone a remote repo localy (in the current folder):

```bash
git clone https://github.com/heitara/NH_nodejs_backend .
```

With the following command you can clone a remote repo localy (in a folder alled `nodejs_backend`):

```bash
git clone https://github.com/heitara/NH_nodejs_backend nodejs_backend
```