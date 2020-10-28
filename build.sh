# Update build version
v_major=$(cat version | sed -n 1p)
v_minor=$(cat version | sed -n 2p)
v_review=$(cat version | sed -n 3p)
v_build=$(cat version | sed -n 4p)

if [[ $1 = "major" ]]; then
    v_major=$(($v_major+1))
    v_minor=0
    v_review=0
    v_build=0
elif [[ $1 = "minor" ]]; then
    v_minor=$(($v_minor+1))
    v_review=0
    v_build=0
elif [[ $1 = "review" ]]; then
    v_review=$(($v_review+1))
    v_build=0
else
    v_build=$(($v_build+1))
fi

echo "Building version $v_major.$v_minor.$v_review.$v_build..."

npm version $v_major.$v_minor.$v_review-$v_build
printf "$v_major\n$v_minor\n$v_review\n$v_build\n" > VERSION

# Build index.ts
rm src/index.ts
for filename in src/*.ts; do
    filename=${filename%.ts}
    echo "export * from './${filename##*/}'" >> src/index.ts
done

# Build
rm -rf build/*
tsc -p tsconfig.json

build_exit_code=$?

# Commit
if [[ "$build_exit_code" = "0" ]]; then
    git add *
    git commit -m "Вuild $v_major.$v_minor.$v_review.$v_build"
else
    echo "Exited with error code $build_exit_code"
fi

