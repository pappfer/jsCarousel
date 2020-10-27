class JsCarousel {
    constructor(selector, data, options = {}) {
        this.id = 'jsCarousel';
        this.name = 'jsCarousel';

        this.options = Object.assign({
            title: "jsCarousel",
            imagesToShow: 3,
            animationDelay: 5,
            animationDuration: 1.5,
            displayToggleButton: true,
            imageOffsetX: -100,
            imageOffsetY: 30,
            imageHeight: 350,
            ctaButton: {
                enabled: true,
                text: 'REQUEST A DEMO',
                href: '/contact'
                /*dataAttributes: {
                    toggle: 'modal',
                    target: '#contact-modal'
                }*/
            }
        }, options);

        this.container = document.getElementById(selector);
        this.currentImage = 0;
        this.gotoImage = null;
        this.images = data;
        this.animations = [];
        this.animationSettings = {
            duration: this.options.animationDuration * 1000,
            easing: 'ease-in-out',
            fill: 'both',
            delay: this.options.animationDelay * 1000,
            //iterations: Infinity
        };

        document.getElementById(selector).innerHTML = '';
        this.container.classList.add('jsCarousel');
        this.container.classList.add('animated');
        this.container.classList.add('fadeIn');

        let self = this;

        let bodyContainer = document.createElement("div");
        bodyContainer.setAttribute('id', this.setId('__body'));
        bodyContainer.setAttribute('class', this.setClass('__body'));
        bodyContainer.setAttribute('style', 'height: ' + this.options.imageHeight + 'px');
        this.container.appendChild(bodyContainer);

        let footerContainer = document.createElement("div");
        footerContainer.setAttribute('id', this.setId('__footer'));
        footerContainer.setAttribute('class', this.setClass('__footer'));
        this.container.appendChild(footerContainer);

        let contentContainer = document.createElement("div");
        contentContainer.setAttribute('id', this.setId('__content'));
        contentContainer.setAttribute('class', this.setClass('__content'));
        bodyContainer.appendChild(contentContainer);

        let imagesContainer = document.createElement("div");
        imagesContainer.setAttribute('id', this.setId('__images'));
        imagesContainer.setAttribute('class', this.setClass('__images'));
        bodyContainer.appendChild(imagesContainer);

        let slidesContainer = document.createElement("div");
        slidesContainer.setAttribute('id', this.setId('__slides'));
        slidesContainer.setAttribute('class', this.setClass('__slides'));
        contentContainer.appendChild(slidesContainer);

        let slideTitle = document.createElement("h1");
        slideTitle.setAttribute('class', self.setClass('__title'));
        slideTitle.innerText = self.options.title;
        contentContainer.appendChild(slideTitle);

        let footerItemsContainer = document.createElement("div");
        footerItemsContainer.setAttribute('id', this.setId('__footer-items'));
        footerItemsContainer.setAttribute('class', this.setClass('__footer-items'));
        contentContainer.appendChild(footerItemsContainer);

        let dotsContainer = document.createElement("div");
        dotsContainer.setAttribute('id', this.setId('__dots-container'));
        dotsContainer.setAttribute('class', this.setClass('__dots-container'));
        contentContainer.appendChild(dotsContainer);

        let startScale = 1.0;
        let endScale = 1.2;
        let startOpacity = 1.0;
        let endOpacity = 1.0;
        let imageLeft = 100;
        let imageTop = 0;

        let ctaButtonContainer = document.createElement('div');
        ctaButtonContainer.setAttribute('class', self.setClass('__btn-cta-container'));
        document.getElementById('jsCarousel__content').appendChild(ctaButtonContainer);
        let ctaButton = document.createElement('a');
        ctaButton.setAttribute('class', self.setClass('__btn-cta'));
        ctaButton.innerText = self.options.ctaButton.text;
        ctaButton.href = self.options.ctaButton.href;

        if (self.options.ctaButton.dataAttributes) {
            Object.keys(self.options.ctaButton.dataAttributes).forEach(function(dataKey) {
                ctaButton.dataset[dataKey] = self.options.ctaButton.dataAttributes[dataKey];
            });
        }

        ctaButtonContainer.appendChild(ctaButton);

        Object.keys(this.images).forEach(function (value, i) {
            let linkNode = document.createElement("a");
            let linkId = self.id + '__link--' + i;
            linkNode.setAttribute('id', linkId);
            linkNode.setAttribute('class', self.id + '__link' + (i === 0 ? ' active' : ''));
            dotsContainer.appendChild(linkNode);

            document.getElementById(linkId).addEventListener('click', function () {
                //self.currentImage = i;
                //self.updateSlide();
                self.gotoSlide(i);
            });

            let footerItemNode = document.createElement("div");
            footerItemNode.setAttribute('id', self.setId('__footer-item--' + i));
            footerItemNode.setAttribute('class', self.id + '__footer-item' + (i === 0 ? ' active' : ''));
            let footerItemTransitionDelay = .4;
            self.images[i].footerItems.forEach(function(footerItemValue, footerItemIndex) {
                let footerItemColumnNode = document.createElement("div");
                footerItemColumnNode.setAttribute('class', self.id + '__footer-item-column column');
                footerItemColumnNode.innerHTML = footerItemValue;
                footerItemColumnNode.style.transitionDelay = footerItemTransitionDelay + 's';
                footerItemNode.appendChild(footerItemColumnNode);
                footerItemTransitionDelay += .2;
            });

            footerItemsContainer.appendChild(footerItemNode);

            let slideContainer = document.createElement("section");
            slideContainer.setAttribute('id', self.setId('__slide--' + i));
            slideContainer.setAttribute('class', self.setClass('__slide'));
            slidesContainer.appendChild(slideContainer);

            if (i === 0) {
                slideContainer.classList.add('active');
            }

            let slideSubtitle = document.createElement("h2");
            slideSubtitle.setAttribute('class', self.setClass('__subtitle'));
            slideSubtitle.innerText = self.images[i].title;
            slideContainer.appendChild(slideSubtitle);

            let slideContent = document.createElement("div");
            slideContent.innerHTML = self.images[i].description;

            if (self.images[i].url !== '' && self.images[i].url !== '#') {
                let slideUrlLinkText = document.createTextNode(' ... read more');

                let slideUrlLink = document.createElement("a");
                slideUrlLink.setAttribute('href', self.images[i].url);
                slideUrlLink.appendChild(slideUrlLinkText);

                slideContent.appendChild(slideUrlLink);
                /*let slideUrl = document.createElement("div");
                slideUrl.setAttribute('class', self.setClass('__url'));
                slideUrl.appendChild(slideUrlLink);
                slideContent.appendChild(slideUrl);*/
            }

            slideContainer.appendChild(slideContent);

            if (i <= self.options.imagesToShow) {
                let imageNode = document.createElement("img");
                imageNode.setAttribute('src', self.images[i].src);
                imageNode.setAttribute('alt', self.images[i].title);
                imageNode.setAttribute('title', self.images[i].title);
                imageNode.setAttribute('id', self.id + '__image--' + i);
                imageNode.setAttribute('class', self.id + '__image ' + self.id + '__image--' + i);
                imageNode.style.left = imageLeft + 'px';
                imageNode.style.top = imageTop + 'px';
                imageNode.style.height = self.options.imageHeight + 'px';
                imageNode.style.zIndex = (self.images.length - i).toString();
                imagesContainer.appendChild(imageNode);

                if (i === 0) {
                    // First image
                    endOpacity = 0.0;
                } else if (i === self.options.imagesToShow) {
                    // Last image
                    startOpacity = 0.0;
                } else {
                    endOpacity = 1.0;
                }

                let keyframes = [
                    {transform: 'translate(0, 0) scale(' + startScale + ')', opacity: startOpacity},
                    {transform: 'translate(' + self.options.imageOffsetX + 'px, ' +
                            self.options.imageOffsetY + 'px) scale(' + endScale + ')', opacity: endOpacity}
                ];

                self.animations[i] = imageNode.animate(keyframes, self.animationSettings);
                startScale -= 0.2;
                endScale -= 0.2;
                imageLeft -= self.options.imageOffsetX;
                imageTop -= self.options.imageOffsetY;
            }
        });

        /*let playButton = document.createElement("a");
        let playButtonId = this.setId('__play-button');
        playButton.setAttribute('class', this.setClass('__play-button'));
        playButton.innerText = 'play';
        //playButton.setAttribute('src', imgPlay);ÍÍÍÍÍÍÍÍÍÍÍÍÍ
        dotsContainer.appendChild(playButton);

        playButton.addEventListener('click', function () {
            self.play();
        });*/

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
        let activeFooterItem = document.getElementsByClassName(this.id + '__footer-item active');

        for (let dot of activeDot) {
            dot.classList.remove('active');
        }

        for (let slide of activeSlide) {
            slide.classList.remove('active');
        }

        for (let footerItem of activeFooterItem) {
            footerItem.classList.remove('active');
        }

        let nextDot = document.getElementById(this.id + '__link--' + this.currentImage);
        let nextSlide = document.getElementById(this.id + '__slide--' + this.currentImage);
        let nextFooterItem = document.getElementById(this.id + '__footer-item--' + this.currentImage);

        if (this.gotoImage === this.currentImage) {
            for (let j = 0; j <= this.options.imagesToShow; j++) {
                this.animations[j].effect.updateTiming({
                    delay: this.options.animationDelay * 1000,
                    duration: this.options.animationDuration * 1000,
                });
            }

            this.gotoImage = null;
            this.pause();
        }

        nextDot.classList.add('active');
        nextSlide.classList.add('active');
        nextFooterItem.classList.add('active');

        let imageIndex = this.currentImage;

        for (let i = 0; i <= this.options.imagesToShow; i++) {

            imageIndex = this.currentImage + i;

            if (imageIndex >= this.images.length) {
                imageIndex -= this.images.length;
            }

            document.getElementById(this.id + '__image--' + i).src = this.images[imageIndex].src;

            this.animations[i].currentTime = 0;
        }
    }

    gotoSlide(i) {
        this.gotoImage = i;

        console.log(this.currentImage, this.gotoImage);

        if (this.currentImage !== this.gotoImage) {
            for (let j = 0; j <= this.options.imagesToShow; j++) {
                this.animations[j].effect.updateTiming({
                    delay: 0,
                    duration: 100,
                });
                this.animations[j].play();
            }
        } else {
            this.pause();
        }
    }

    setId(id) {
        return this.id + id;
    }

    setClass(className) {
        return this.name + className;
    }

    pause() {
        for (let i = 0; i <= this.options.imagesToShow; i++) {
            this.animations[i].pause();
        }
    }

    play() {
        for (let i = 0; i <= this.options.imagesToShow; i++) {
            this.animations[i].play();
        }
    }
}