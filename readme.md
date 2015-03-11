## Gifable

Gifable squashes your GIFs into super efficient HTML5 videos that can be viewed from any device - saving you time and bandwidth.

## Contributing

### Required Software

> - PHP 5.5
> - Vagrant
> - Laravel Homestead
> - Node.js

### Installation

Generate environment:
```
homestead up
```

Install dependencies:
```
composer install
```

Generate and populate database table(s):
```
php artisan migrate
```

Install frontend dependencies and build:
```
npm install
npm install -g bower gulp
bower install
gulp watch
```

Thank you for considering contributing to Gifable!

## Security Vulnerabilities

If you discover a security vulnerability within Gifable, please send an e-mail to Rob Cary at r0bc4ry@gmail.com. All security vulnerabilities will be promptly addressed.

## License

Gifable is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
