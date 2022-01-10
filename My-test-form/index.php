<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<header class="header">
		<div class="container">
			<img src="img\logo.png" alt="WAYUP" class="logo">
			<div class="wrapper">
				<div class="offer">
					<h1 class="title">
						С помощью верстки<br>я создам ту жизнь, о которой<br><span>мечтаю!</span>
					</h1>
					<p class="intro">
						Мои стремления + настойчивость позволят мне достичь чего угодно. Я не верю в это. Я знаю это на 100%. Меня не остановить!
					</p>
					<a href="#" class="btn">
						Двигаться к мечте!
					</a>
				</div>
				<img src="img\travel.png" alt="Travel pic" class="travel-pic">
			</div>
		</div>
	</header>
	<section id="future" class="future">
		<div class="container">
			<h2 class="section-title">Что меня ждет впереди</h2>
			<div class="coming">
				<div class="coming-block">
					<h3 class="coming-block-title">
						Свободное время
					</h3>
					<p class="coming-block-text">
						Мне нужно свободное время на семью и самое настоящее
					</p>
				</div>
				<div class="coming-block travel">
					<h3 class="coming-block-title">
						Яркие путешествия
					</h3>
					<p class="coming-block-text">
						Работать откуда угодно - что может быть лучше?
					</p>
				</div>
				<div class="coming-block values">
					<h3 class="coming-block-title">
						Создание ценности
					</h3>
					<p class="coming-block-text">
						Нет ничего сильнее, чем жить не просто так, создавая ценность
					</p>
				</div>
			</div>
		</div>
	</section>
	<section id="mail" class="mail">
		<div class="container">
			<h2 class="section-title">Форма заказа билета в будущее</h2>
			<?php
                require __DIR__ . "/functions.php";

                if (isset($_POST["submit"])) {
                    $name = $_POST["name"];
                    $email = $_POST["email"];
                    $tel = $_POST["tel"];
                    $text = $_POST["text"];

                    $errors = validation($_POST);

                    if (empty($errors)) {
                        send($name, $email, $tel, $text);
                    } else {
                        ?>
                        <div class="alert alert-danger" role="alert">
                            Incorrect fields data
                        </div>
                        <?php
                    }
                }
                ?>
			<form action="/php-form/index.php" method="post" class="form">
				<input type="name" placeholder="Имя" name="name" value="Artem" class="input <?= $errors["name"] ?? "main" ?>" required>
				<input type="email" placeholder="E-mail" name="email" value="aa@g.com" class="input <?= $errors["email"] ?? "main" ?>" required>
				<input type="tel" placeholder="Телефон" name="tel" value="123" class="input <?= $errors["tel"] ?? "main" ?>" required>
				<input type="text" placeholder="Куда я полечу в ближайшее время?" name="text" value="Egypt" class="input  <?= $errors["text"] ?? "main" ?>" required>
				<button type="submit" name="submit" class="btn btn-form">
					Двигаться к мечте!
				</button>
			</form>
		</div>
	</section>
	<footer id="footer" class="footer">
		<div class="container">
			<p class="credits">
				&copy; Все мои мечты защищены моим трудолюбием
			</p>
		</div>
	</footer>
	
	<!-- JAVASCRIPTS -->
	<script src="bootstrap/bootstrap.min.js"></script>
</body>
</html>