# someSmithy
Doing some Smithy

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
(echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /root/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

brew tap smithy-lang/tap
brew install smithy-cli


smithy --help
smithy build --help
smithy build model/
```


Running `smithy build model/` will generate the models and show you where the output is:

```
root@ubuntu:/home/klundert/someSmithy/examples/weather# smithy build model/
SUCCESS: Validated 245 shapes

Validated model, now starting projections...

──  source  ────────────────────────────────────────────────────────────────────
Completed projection source (245): /home/klundert/someSmithy/examples/weather/build/smithy/source
```


You can diff to identify breaking changes:
```
cp model/weather.smithy weather-old.smithy
# make a change
smithy diff --old weather-old.smithy --new model/weather.smithy
```

Query all shapes and shapes without documentation:
```
smithy select --selector '[id|namespace = "example.weather"]' model/
```

Can build TypeScript clients using following `misthy-build.json`:
```json
// --- smithy-build.json ---
{
    "version": "1.0",
    "projections": {
        "source": {
            "plugins": {
                "typescript-codegen": {
                    "service": "example.time#Time",
                    "package": "@example/time",
                    "packageVersion": "0.0.1"
                }
            }
        }
    },
    "maven": {
        "dependencies": [
            "software.amazon.smithy:smithy-model:1.30.0",
            "software.amazon.smithy.typescript:smithy-typescript-codegen:0.14.0"
        ]
    }
}
```

Then run regular build e.g. `smithy build model/time.smithy`, and the clients appear in the build directory.



More info on Smithy:
https://smithy.io/2.0/index.html
https://github.com/smithy-lang/awesome-smithy