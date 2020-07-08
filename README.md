# Laravel-React EMR

A simple Electronic Medical example made with ReactJS and Laravel. Add users from DB if needed.

### Prequisites

-   PHP [(Installation Guide)](https://www.php.net/manual/en/install.php)
-   Composer [(Installation Guide)](https://getcomposer.org/doc/00-intro.md)
-   Laravel [(Installation Guide)](https://laravel.com/docs/5.8)
-   Latest Node and NPM [(Installation Guide)](https://www.npmjs.com/get-npm)
-   XAMPP Web Server
-   SQL

## Installation

-   Clone the repo:

```bash
    git clone
```

-   Install all composer and NPM dependencies:

```bash
    composer install && npm install
```

-   create a new .env file and copy content from .env.example and update the values:

```
DB_DATABASE (your local database, i.e. "emr")
DB_USERNAME (your local db username, i.e. "root")
DB_PASSWORD (your local db password, i.e. "")
```

-   Generate app key:

```bash
php artisan key:generate
```

-   Run the database migrations:

```bash
php artisan migrate
```

-   Run an initial build:

```bash
npm run dev
```

-   Boot up server:

```bash
php artisan serve
```

## Additional Set Up Tips

### Users

You can log in these credentials:

#### Doctor

Email: `doctor1@gmail.com`
Password: `password`

# EMR
