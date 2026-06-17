-include .env version

OPENAPI_GENERATOR_VER = v7.10.0
OPENAPI_GENERATOR_IMAGE = openapitools/openapi-generator-cli:$(OPENAPI_GENERATOR_VER)

default: build

build: clean codegen deps compile
.PHONY: build

codegen:
	docker run --rm \
		-v "$(PWD)":/gen \
		-w /gen \
		"$(OPENAPI_GENERATOR_IMAGE)" generate \
			-i ./swagger.json \
			-g typescript-fetch \
			-o ./src \
			--additional-properties=npmName=@wodby/sdk,supportsES6=true,typescriptThreePlus=true,withInterfaces=true
	rm -f ./src/.npmignore \
		./src/.gitignore \
		./src/git_push.sh \
		./src/package.json \
		./src/tsconfig.json \
		./src/tsconfig.esm.json
.PHONY: codegen

deps:
	npm ci
.PHONY: deps

compile:
	npm run build
.PHONY: compile

clean:
	rm -rf ./dist ./src ./.openapi-generator ./codegen.jar
.PHONY: clean
