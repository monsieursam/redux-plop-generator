const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setHelper("upperCase", function (text) {
    return text.toUpperCase();
  });
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/Components/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/Components/Component.test.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Components/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/Components/index.js.hbs",
      },
      {
        type: "add",
        path: "src/components/index.js",
        templateFile: "plop-templates/injectable-index.js.hbs",
        skipIfExists: true,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: "append",
        path: "src/components/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("store", {
    description: "Create a store",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "src/redux/store/index.js",
        templateFile: "plop-templates/redux/store/store.js.hbs",
      },
      {
        type: "add",
        path: "src/redux/reducers/index.js",
        templateFile: "plop-templates/redux/reducers/index.js.hbs",
      },
    ],
  });

  plop.setGenerator("api store", {
    description: "Create an api store",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "src/redux/store/index.js",
        templateFile: "plop-templates/redux/store/apistore.js.hbs",
      },
      {
        type: "add",
        path: "src/redux/reducers/index.js",
        templateFile: "plop-templates/redux/reducers/index.js.hbs",
      },
    ],
  });

  plop.setGenerator("reducer", {
    description: "Create a reducer",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your reducer name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/redux/reducers/{{pascalCase name}}Reducer.js",
        templateFile: "plop-templates/redux/reducers/Reducer.js.hbs",
      },
    ],
  });

  plop.setGenerator("action", {
    description: "Create an action",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your action name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/redux/actions/{{pascalCase name}}Actions.js",
        templateFile: "plop-templates/redux/actions/Action.js.hbs",
      },
    ],
  });

  plop.setGenerator("api action", {
    description: "Create an api action",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your action name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/redux/actions/api{{pascalCase name}}Actions.js",
        templateFile: "plop-templates/redux/actions/ApiAction.js.hbs",
      },
    ],
  });

  plop.setGenerator("api reducer", {
    description: "Create an api reducer",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your reducer name?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/redux/reducers/api{{pascalCase name}}Reducer.js",
        templateFile: "plop-templates/redux/reducers/ApiReducer.js.hbs",
      },
    ],
  });

  plop.setGenerator("axios", {
    description: "Create an axios file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your url?",
        validate: requireField("name"),
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/redux/axios/axios.js",
        templateFile: "plop-templates/redux/axios/Axios.js.hbs",
      },
    ],
  });
};
