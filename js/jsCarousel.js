class JsCarousel {

    constructor() {
        this.id = 'jsCarousel';
        this.name = 'jsCarousel';
        this.container = document.getElementById(this.id);
        this.imageIndex = null;
        this.currentImage = 0;
        this.imagesToShow = 3;

        this.images = [
            {title: 'First', src: 'img/carousel/1.png', url: '#', description: 'First description'},
            {title: 'Second', src: 'img/carousel/2.png', url: '#', description: 'Second description'},
            {title: 'Third', src: 'img/carousel/3.png', url: '#', description: 'Third description'},
            {title: 'Fourth', src: 'img/carousel/4.png', url: '#', description: 'Fourth description'},
            {title: 'Fifth', src: 'img/carousel/5.png', url: '#', description: 'Fifth description'},
            {title: 'Sixth', src: 'img/carousel/6.png', url: '#', description: 'Sixth description'},
            {title: 'Seventh', src: 'img/carousel/7.png', url: '#', description: 'Seventh description'},
            {title: 'Eighth', src: 'img/carousel/8.png', url: '#', description: 'Eighth description'},
            {title: 'Ninth', src: 'img/carousel/9.png', url: '#', description: 'Ninth description'},
            {title: 'Tenth', src: 'img/carousel/10.png', url: '#', description: 'Tenth description'},
        ];

        this.animationDelay = 2;
        this.animationDuration = 2;

        this.currentDot = null;
        this.nextDot = null;
        this.keyframes = null;
        this.animations = [];
        this.animationSettings = {
            duration: this.animationDuration * 1000,
            easing: 'ease-in-out',
            fill: 'both',
            delay: this.animationDelay * 1000,
            //iterations: Infinity
        };
        this.imageOffsetX = -100;
        this.imageOffsetY = 30;

        this.container.classList.add('jsCarousel');

        let self = this;

        let contentContainer = document.createElement("div");
        contentContainer.setAttribute('id', this.setId('__content'));
        contentContainer.setAttribute('class', this.setClass('__content'));
        this.container.appendChild(contentContainer);

        let imagesContainer = document.createElement("div");
        imagesContainer.setAttribute('id', this.setId('__images'));
        imagesContainer.setAttribute('class', this.setClass('__images'));
        this.container.appendChild(imagesContainer);

        let slidesContainer = document.createElement("div");
        slidesContainer.setAttribute('id', this.setId('__slides'));
        slidesContainer.setAttribute('class', this.setClass('__slides'));
        contentContainer.appendChild(slidesContainer);

        let dotsContainer = document.createElement("div");
        dotsContainer.setAttribute('id', this.setId('__dots'));
        dotsContainer.setAttribute('class', this.setClass('__dots'));
        contentContainer.appendChild(dotsContainer);

        let toggleButton = document.createElement("button");
        toggleButton.setAttribute('id', this.setId('__toggle-button'));
        toggleButton.setAttribute('class', this.setId('__btn'));
        toggleButton.innerText = 'Pause';
        toggleButton.addEventListener("click", function() {
            for (let i = 0; i <= self.imagesToShow; i++) {
                if (self.animations[i].playState === "running") {
                    self.animations[i].pause();
                    toggleButton.innerText = 'Play';
                } else {
                    self.animations[i].play();
                    toggleButton.innerText = 'Pause';
                }
            }
        });
        contentContainer.appendChild(toggleButton);
        let startScale = 1.0;
        let endScale = 1.2;
        let startOpacity = 1.0;
        let endOpacity = 1.0;
        let imageLeft = 100;
        let imageTop = 0;

        Object.keys(this.images).forEach(function (value, i) {
            let linkNode = document.createElement("a");
            let id = self.id + '__link--' + i;
            linkNode.setAttribute('id', id);
            linkNode.setAttribute('class', self.id + '__link' + (i === 0 ? ' active' : ''));
            dotsContainer.appendChild(linkNode);

            document.getElementById(id).addEventListener('click', function () {
                self.currentImage = i;
                self.updateSlide();
            });

            let slideContainer = document.createElement("section");
            slideContainer.setAttribute('id', self.setId('__slide--' + i));
            slideContainer.setAttribute('class', self.setClass('__slide'));
            slidesContainer.appendChild(slideContainer);

            if (i === 0) {
                slideContainer.classList.add('active');
            }

            let slideTitle = document.createElement("h1");
            slideTitle.setAttribute('class', self.setClass('__title'));
            slideTitle.innerText = self.images[i].title;
            slideContainer.appendChild(slideTitle);

            let slideContent = document.createElement("div");
            slideContent.innerHTML = self.images[i].description;
            slideContainer.appendChild(slideContent);

            if (i <= self.imagesToShow) {
                let imageNode = document.createElement("img");
                imageNode.setAttribute('src', self.images[i].src);
                imageNode.setAttribute('alt', self.images[i].title);
                imageNode.setAttribute('title', self.images[i].title);
                imageNode.setAttribute('id', self.id + '__image--' + i);
                imageNode.setAttribute('class', self.id + '__image ' + self.id + '__image--' + i);
                imageNode.style.left = imageLeft + 'px';
                imageNode.style.top = imageTop + 'px';
                imageNode.style.zIndex = (self.images.length - i).toString();
                imagesContainer.appendChild(imageNode);

                if (i === 0) {
                    // First image
                    endOpacity = 0.0;
                } else if (i === self.imagesToShow) {
                    // Last image
                    startOpacity = 0.0;
                } else {
                    startOpacity -= .2;
                    endOpacity = 1.0;
                }

                let keyframes = [
                    {transform: 'translate(0, 0) scale(' + startScale + ')', opacity: startOpacity},
                    {transform: 'translate(' + self.imageOffsetX + 'px, ' + self.imageOffsetY + 'px) scale(' + endScale + ')', opacity: endOpacity}
                ];

                self.animations[i] = imageNode.animate(keyframes, self.animationSettings);
                startScale -= 0.2;
                endScale -= 0.2;
                imageLeft -= self.imageOffsetX;
                imageTop -= self.imageOffsetY;
            }
        });

        if (this.animations instanceof Array && typeof this.animations[0] === "object") {
            let self = this;
            this.animations[0].onfinish = function () {
                self.currentImage++;
                if (self.currentImage >= self.images.length) {
                    self.currentImage = 0;
                }

                self.updateSlide();
            };
        }
    }


    updateSlide() {
        let activeSlide = document.getElementsByClassName(this.id + '__slide active');
        let activeDot = document.getElementsByClassName(this.id + '__link active');
        for (let dot of activeDot) {
            dot.classList.remove('active');
        }

        for (let slide of activeSlide) {
            slide.classList.remove('active');
        }

        let nextDot = document.getElementById(this.id + '__link--' + this.currentImage);
        let nextSlide = document.getElementById(this.id + '__slide--' + this.currentImage);
        nextDot.classList.add('active');
        nextSlide.classList.add('active');
        let imageIndex = this.currentImage;

        for (let i = 0; i <= this.imagesToShow; i++) {

            imageIndex = this.currentImage + i;

            if (imageIndex >= this.images.length) {
                imageIndex -= this.images.length;
            }

            document.getElementById(this.id + '__image--' + i).src = this.images[imageIndex].src;

            this.animations[i].currentTime = 0;
        }
    }

    setId(id) {
        return this.id + id;
    }

    setClass(className) {
        return this.name + className;
    }

    pause() {
        for (let i = 0; i <= this.imagesToShow; i++) {
            this.animations[i].cancel();
        }
    }

    play() {
        for (let i = 0; i <= this.imagesToShow; i++) {
            this.animations[i].play();
        }
    }
}