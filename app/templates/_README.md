# <%= appname %>

## Requirements
- a mongoDB server (set the host, port, dbname and credentials in Gruntfile.js)
or
- [deployd binaries installed](http://deployd.com/download.html)


## Install

### Development without deployd binaries
Launch deployd

```bash
$ grunt server
```

### Development with deployd binaries
```bash
$ dpd -o
```

Then, go to [http://localhost:2403/dashboard](http://localhost:2403/dashboard) to add a collection or two ... et voilà!
