# 🗄️ Project Structure

Most of the code lives in the `src` folder and looks like this:

```bash
src
|
+-- _data             # Data application (JSON, CSV files, etc.)
|
+-- _langauges        # Internationalization (i18n)
|
+-- app               # The App Router from NextJS
|
+-- lib               # Different Libraries preconfiguration
|
+-- types             # Base types used across the application
|
+-- ui                # All user interface code related (React components)
|
+-- utils             # Utility functions
```

In order to scale the application in the easiest and most maintainable way