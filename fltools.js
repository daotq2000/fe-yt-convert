jQuery(document).ready(function($) {

	var siteUrl = WPURLS.siteurl;
	var translations = LANG_STRINGS;
	var autoFetch = false;
	var executed = false;
	let elm;

	if (document.getElementById("downloadBtn")) {
		document.getElementById("downloadBtn").addEventListener("click", clickDownload);
	}
	window.addEventListener("hashchange", function () {
		url();
	}, false);
	url();

	function calculateHash(url, salt) {
		return btoa(url) + (url.length + 1_000) + btoa(salt);
	}

	function clickDownload(e) {
		let url = document.getElementById("url").value;
		let token = document.getElementById("token").value;
		const match = url.match(
			/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/g
		);
		if(match){
			url = match[0];
			if (!isEmpty(url) && isValidURL(url)) {
				executed = true;
				hideAlert();
				let headers = new Headers();
				headers.append("Content-Type", "application/x-www-form-urlencoded");
				let urlencoded = new URLSearchParams();
				urlencoded.append("url", url);
				urlencoded.append("token", token);
				urlencoded.append("hash", calculateHash(url, 'aio-dl'));
				let requestOptions = {
					method: 'POST',
					headers: headers,
					body: urlencoded,
					redirect: 'follow'
				};
				showLoader();
				removeHash();
				window.location.replace("#url=" + url);
				let statusCode;
				fetch(siteUrl + "/wp-json/mx-downloader/video-data/", requestOptions)
					.then(response => {
					if (response.status === 403) {
						window.location.reload();
					}
					statusCode = response.status;
					return response.text();
				}).then(result => {
					result = JSON.parse(result)
					if (result.error === undefined) {

						showResult(result);
						if(TYPE_MX_DOW.BANDWIDTH_SAVING){
							sessionStorage.setItem("video_data", JSON.stringify(result));
						}
					} else {
						showAlert(result.error)
					}
				})
					.catch(error => {
					showAlert(statusCode + " " + error)
				});
			} else {
				showAlert(translations['enterValidUrl']);
			}
			e.preventDefault();
		}
	}

	var input = document.getElementById("url");
	if (input) {
		input.addEventListener("keyup", function (event) {
			if (event.keyCode === 13) {
				clickDownload();
				event.preventDefault();
			}
		});

	}


	function url() {
		if (window.location.href.indexOf("#url=") > -1 && executed === false) {
			let url = window.location.href.match(new RegExp("#url=(.+)", ""))[1];
			let token = document.getElementById("token").value;
			document.getElementById("url").value = url;
			if (autoFetch && token !== "" && url !== "" && !executed) {
				clickDownload();
				executed = true;
			}
		}
	}

	function isValidURL(url) {
		if (!elm) {
			elm = document.createElement('input');
			elm.setAttribute('type', 'url');
		}
		elm.value = url;
		return elm.validity.valid;
	}

	function isEmpty(str) {
		return (!str || str.length === 0);
	}

	function showLoader() {
		document.getElementById("url").style.display = "none";
		document.getElementById("downloadBtn").style.display = "none";
		document.getElementById("pasteBtn").style.display = "none";
		let loader = document.createElement("img");
		loader.src = siteUrl + "/wp-content/themes/generatepress_child/tube-spinner.svg";
		loader.className = "img-fluid w-25 mx-auto";
		loader.id = "loader";
		document.getElementById("download-form").appendChild(loader);
	}

	function hideLoader() {
		const urlElement = document.getElementById("url");
		const downloadBtn = document.getElementById("downloadBtn");
		const pasteBtn = document.getElementById("pasteBtn");
		const loader = document.getElementById("loader");

		if (urlElement) urlElement.style.display = "";
		if (downloadBtn) downloadBtn.style.display = "";
		if (pasteBtn) pasteBtn.style.display = "";
		if (loader) loader.remove();
	}


	function showAlert(message) {
		const alertDiv = document.getElementById("alert");
		if (alertDiv) {
			alertDiv.innerHTML = message;
			alertDiv.style.display = "block";
			setTimeout(hideAlert, 5000);
		}
		hideLoader();
	}

	function hideAlert() {
		const alertDiv = document.getElementById("alert");
		if (alertDiv) {
			alertDiv.innerHTML = "";
			alertDiv.style.display = "none";
		}
	}


	function removeHash() {
		history.pushState("", document.title, window.location.pathname
						  + window.location.search);
	}

	function showResult(result, isDown = false) {
		if(!isDown){
			hideLoader();
		}
		let template = '<div><div class="row"><div class="col-md-7 col-sm-12 mt-4"><div class="row"><div class="col-4"><img class="position-relative img-fluid rounded w-100" style="object-fit:cover" src="{{thumbnail}}" alt="{{title}}" title="{{title}}"></div><div class="col-8"><span class="mt-8 mb-0">{{title}}</span><div class="progress-list"></div></div></div></div><div class="col-md-5 col-sm-12 mt-4 list-links">{{links}}</div></div><div><a href="https://apps.apple.com/us/app/savego/id6502337509" rel="nofollow" class="btn btn-primary my-3 my-2" style=" display: block; "><strong>The app is available on the App Store.</strong></a><a href="https://play.google.com/store/apps/details?id=com.savego.app&hl=en_US" rel="nofollow" class="btn btn-primary my-3 my-2" style=" display: block; "><strong>The app is available on the Google Play Store. </strong></a></div></div>'
		let buttons = "";
		let buttonTemplate1 = '<a href="{{url}}" class="btn btn-success text-uppercase my-2 d-block" data-quality="{{quality}}"><strong>{{quality}} </strong>{{icon}}{{type}}({{size}})</a>';
		let buttonTemplate2 = '<a href="{{url}}" class="btn btn-danger text-uppercase my-2 d-block"><strong>{{quality}} </strong>{{icon}}{{type}}({{size}})</a>';
		let buttonTemplate3 = '<a href="{{url}}" class="btn btn-info text-uppercase my-2 d-block"><strong>{{quality}} </strong>{{icon}}{{type}}({{size}})</a>';
		let audioIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="white" viewBox="0 0 415.963 415.963"><path d="M328.712 264.539c12.928-21.632 21.504-48.992 23.168-76.064 1.056-17.376-2.816-35.616-11.2-52.768-13.152-26.944-35.744-42.08-57.568-56.704-16.288-10.912-31.68-21.216-42.56-35.936l-1.952-2.624c-6.432-8.64-13.696-18.432-14.848-26.656-1.152-8.32-8.704-14.24-16.96-13.76a15.957 15.957 0 00-14.88 15.936v285.12c-13.408-8.128-29.92-13.12-48-13.12-44.096 0-80 28.704-80 64s35.904 64 80 64 80-28.704 80-64V165.467c24.032 9.184 63.36 32.576 74.176 87.2-2.016 2.976-3.936 6.176-6.176 8.736-5.856 6.624-5.216 16.736 1.44 22.56 6.592 5.888 16.704 5.184 22.56-1.44 4.288-4.864 8.096-10.56 11.744-16.512.384-.448.737-.928 1.056-1.472z"/></svg> ';
		let videoIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="white" viewBox="0 0 467.968 467.968"><path d="M264.704 96.512H51.2c-28.16 0-51.2 23.04-51.2 51.2v172.544c0 28.16 23.04 51.2 51.2 51.2h213.504c28.16 0 51.2-23.04 51.2-51.2V147.712c0-28.672-23.04-51.2-51.2-51.2zM430.08 124.672c-3.072.512-6.144 2.048-8.704 3.584l-79.872 46.08V293.12l80.384 46.08c14.848 8.704 33.28 3.584 41.984-11.264 2.56-4.608 4.096-9.728 4.096-15.36V154.368c0-18.944-17.92-34.304-37.888-29.696z"/></svg> ';
		let imageIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="white" viewBox="0 0 550.801 550.8"><path d="M515.828 61.201H34.972C15.659 61.201 0 76.859 0 96.172V454.63c0 19.312 15.659 34.97 34.972 34.97h480.856c19.314 0 34.973-15.658 34.973-34.971V96.172c0-19.313-15.658-34.971-34.973-34.971zm0 34.971V350.51l-68.92-62.66c-10.359-9.416-26.289-9.04-36.186.866l-69.752 69.741-137.532-164.278c-10.396-12.415-29.438-12.537-39.99-.271L34.972 343.219V96.172h480.856zm-148.627 91.8c0-26.561 21.523-48.086 48.084-48.086 26.562 0 48.086 21.525 48.086 48.086s-21.523 48.085-48.086 48.085c-26.56.001-48.084-21.524-48.084-48.085z"/></svg> ';
		let dashIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="1rem" fill="white" viewBox="0 0 448.075 448.075"><path d="M352.021 16.075c0-6.08-3.52-11.84-8.96-14.4-5.76-2.88-12.16-1.92-16.96 1.92l-141.76 112.96 167.68 167.68V16.075zM443.349 420.747l-416-416c-6.24-6.24-16.384-6.24-22.624 0s-6.24 16.384 0 22.624l100.672 100.704h-9.376c-9.92 0-18.56 4.48-24.32 11.52-4.8 5.44-7.68 12.8-7.68 20.48v128c0 17.6 14.4 32 32 32h74.24l155.84 124.48c2.88 2.24 6.4 3.52 9.92 3.52 2.24 0 4.8-.64 7.04-1.6 5.44-2.56 8.96-8.32 8.96-14.4v-57.376l68.672 68.672c3.136 3.136 7.232 4.704 11.328 4.704s8.192-1.568 11.328-4.672c6.24-6.272 6.24-16.384 0-22.656z"/></svg> ';
		let i = 0;
		if (typeof result.medias === "undefined") {
			if (result.error) {
				showAlert(result.error);
			} else {
				showAlert("No media found.");
			}

			return;
		}
		result.medias.forEach(function (media, index) {
			let downloadUrl;
			if (media.url !== null) {
				let button;
				let icon;
				if (media.extension === "jpg" || (media.videoAvailable === true && media.audioAvailable === true)) {
					button = buttonTemplate1;
				} else if (media.quality.includes("kbps")) {
					button = buttonTemplate2;
				} else {
					button = buttonTemplate3;
				}
				if (media.extension === "jpg") {
					icon = imageIcon;
				} else if (media.videoAvailable === true && media.audioAvailable === false) {
					icon = dashIcon;
				} else if (media.quality.includes("kbps")) {
					icon = audioIcon;
				} else {
					icon = videoIcon;
				}
				button = button.replace(new RegExp("{{quality}}", "g"), media.quality);
				button = button.replace(new RegExp("{{type}}", "g"), media.extension);
				button = button.replace(new RegExp("{{icon}}", "g"), icon);
				button = button.replace(new RegExp("{{size}}", "g"), media.formattedSize);
				downloadUrl =  media.url;
				if(TYPE_MX_DOW.BANDWIDTH_SAVING && result['source'] != 'youtube'){
					if(!isDown){
						button = button.replace(new RegExp("{{url}}", "g"), `/down" data-url="${downloadUrl}" data-index="${index}`);
					}else{
						button = button.replace(new RegExp("{{url}}", "g"), `#" data-url="${downloadUrl}" data-index="${index}`);
					}

				}else{
					button = button.replace(new RegExp("{{url}}", "g"), downloadUrl);
				}

				buttons = buttons.concat(button);
				i++;
			}
		});
		template = template.replace(new RegExp("{{title}}", "g"), result.title);
		template = template.replace(new RegExp("{{thumbnail}}", "g"), result.thumbnail);
		template = template.replace(new RegExp("{{duration}}", "g"), result.duration);
		template = template.replace(new RegExp("{{links}}", "g"), buttons);
		//const sharingUrl = window.location.href.replace(new RegExp("#url=", "g"), "?u=");
		const sharingUrl = window.location.href;
		template = template.replace(new RegExp("{{facebook_share_link}}", "g"), encodeURI("https://www.facebook.com/sharer.php?u=" + sharingUrl));
		template = template.replace(new RegExp("{{twitter_share_link}}", "g"), encodeURI("https://twitter.com/intent/tweet?url=" + sharingUrl + "&text=Download " + result.title));
		template = template.replace(new RegExp("{{whatsapp_share_link}}", "g"), encodeURI("whatsapp://send?text=Download " + result.title + " " + sharingUrl));
		template = template.replace(new RegExp("{{pinterest_share_link}}", "g"), encodeURI("http://pinterest.com/pin/create/link/?url=" + sharingUrl));
		template = template.replace(new RegExp("{{tumblr_share_link}}", "g"), encodeURI("https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + sharingUrl + "&title=" + result.title));
		template = template.replace(new RegExp("{{reddit_share_link}}", "g"), encodeURI("https://reddit.com/submit?url=" + sharingUrl + "&title=" + result.title));
		template = template.replace(new RegExp("{{qr_share_link}}", "g"), encodeURI("https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + sharingUrl));

		if(isDown){
			const MXDown = document.getElementById("mx_down");
			MXDown.innerHTML = template;
			MXDown.innerHTML += '<div id="dlModal" class="mx-modal"> <div class="mx-modal-content"> <div class="mx-modal-header"> <button class="btn btn-secondary" id="closeModalBtn">Close</button> </div> <div class="mx-modal-body" id="ad-content"></div> </div> </div>';
			let url = sessionStorage.getItem("dataUrl");
			let mediaIndex = sessionStorage.getItem("dataIndex");
			let media = result.medias[mediaIndex];
			detectIncognito().then((dresult) => {
				var linkElements = MXDown.querySelectorAll('.list-links a');
				if(dresult.isPrivate){
					alert('KHÔNG TẢI ĐƯỢC DO DÙNG TRÌNH DUYỆT ẨN DANH');
					// 				window.location.href = url;
					// 				linkElements.forEach(function(linkElement) {
					// 					linkElement.addEventListener('click', function(event) {
					// 						event.preventDefault();
					// 						var url = linkElement.getAttribute('data-url');
					// 						window.location.href = url;
					// 					});
					// 				});
				}else{

					handleDownloadVideo(url+"&bandwidth_saving=1", url, linkElements, media)
					sessionStorage.removeItem("dataUrl");
					sessionStorage.removeItem("dataIndex");
					linkElements.forEach(function(linkElement) {
						linkElement.addEventListener('click', function(event) {
							event.preventDefault();

							var disable = linkElement.getAttribute('data-disable');
							if(disable) {
								showAlert(getTranslation(translations.currentLang, 'loading'), false)
								return false;
							}

							showAd(function(){
								var url = linkElement.getAttribute('data-url');
								var mediaIndex = linkElement.getAttribute('data-index');
								media = result.medias[mediaIndex];
								handleDownloadVideo(url+"&bandwidth_saving=1", url, linkElements, media) 
							});

						});
					});
				}
			});
		}else{
			document.getElementById("download-form").remove();
			document.getElementById("result").innerHTML = template;

			if(TYPE_MX_DOW.BANDWIDTH_SAVING && !isDown){
				var linkElements = document.getElementById("result").querySelectorAll('.list-links a');
				linkElements.forEach(function(linkElement) {
					linkElement.addEventListener('click', function(event) {
						var dataUrl = linkElement.getAttribute('data-url');
						var dataIndex = linkElement.getAttribute('data-index');
						sessionStorage.setItem('dataUrl', dataUrl);
						sessionStorage.setItem('dataIndex', dataIndex);
					});
				});
			}
			const blockGroups = document.querySelectorAll('.wp-block-group');
			blockGroups.forEach(blockGroup => {
				blockGroup.style.display = 'none';
			});

			const resultElement = document.getElementById("result");
			const closestBlockGroup = resultElement.closest(".wp-block-group");

			closestBlockGroup.style.display = "block";

			closestBlockGroup.querySelectorAll(' .wp-block-group__inner-container > *').forEach(child => {
				child.style.display = 'none';
			});

			resultElement.style.display = "";
		}

		if (result.duration === null && document.getElementById("videoDuration") !== null) {
			document.getElementById("videoDuration").remove();
		}




		//     document.getElementById("ad-area-2").scrollIntoView();
	}

	if (document.getElementById("mx_down")) {
		const meta = document.createElement('meta');
		meta.name = "referrer";
		meta.content = "no-referrer";
		document.head.appendChild(meta);
		let result = sessionStorage.getItem("video_data");
		sessionStorage.removeItem("video_data");
		if (result) {
			showResult(JSON.parse(result) ?? [], true);
		} else {
			window.location.href = "/";
		}
	}


	if (document.getElementById("pasteBtn")) {
		document.getElementById("pasteBtn").addEventListener("click", (e) => {
			let pasteBtn = document.getElementById("pasteBtn");
			let input = document.getElementById("url")
			if (pasteBtn.innerHTML === translations.clear) {
				input.value = "";
				pasteBtn.innerHTML = 'Paste from clipboard';
			} else {
				navigator.clipboard.readText().then(clipText =>
													input.value = clipText,
													pasteBtn.innerHTML = translations.clear);
			}
		});
	}




	const showAd = (callback) => {
		$('body').addClass('modal-open');
		$('#dlModal').css('display', 'flex').find('#ad-content').html(`<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-3950160929861442"
data-ad-slot="2791433493"
data-ad-format="auto"
data-full-width-responsive="true"></ins>`);
		(adsbygoogle = window.adsbygoogle || []).push({});
		$('#closeModalBtn').one('click', (e) => {
			e.stopPropagation();
			$('#dlModal').css('display', 'none');
			$('body').removeClass('modal-open');
			callback();
		});
	};
	if(!document.getElementById("mx_down")){
		$('body').on('click', '.list-links a', function(e){
			e.preventDefault();
			e.stopPropagation();
			const href = $(this).attr('href');
			showAd(function(){
				window.location = href;	
			});
		});
	}




	async function handleDownloadVideo(link, fallbackUrl, linkElements, media) {
		// Disable link elements
		linkElements.forEach(linkElement => {
			linkElement.setAttribute('data-disable', '1');
		});

		// Replace HTTP with HTTPS if necessary
		link = link.replace(/^http:\/\//i, "https://");

		const progressList = document.querySelector(".progress-list");
		const progressId = `progress-${Date.now()}`; // Unique ID for each download
		const progressBarId = `progress-bar-${Date.now()}`;
		const loadedMBId = `loadedMB-${Date.now()}`;

		// Add progress indicator
		progressList.insertAdjacentHTML('beforeend', `
<div id="${progressId}" class="progress-${media.quality}">
<div class="d-flex justify-content-between">
<div class="media-quality text-info text-uppercase fw-bold">
${media.quality} - ${media.extension}
</div>
<div class="media-formattedSize"> (<span id="${loadedMBId}">0 MB</span>/${media.formattedSize})
</div>
</div>
<div class="progress my-2">
<div id="${progressBarId}" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%
</div>
</div>
</div>
`);

		let retryCount = 0;
		const maxRetries = 2;

		async function fetchAndHandleVideo() {
			try {
				const response = await fetch(link, { mode: 'cors' });

				if (!response.ok) {
					throw new Error('Network response was not ok.');
				}

				const contentLength = response.headers.get('Content-Length');
				const totalSizeMB = contentLength ? (contentLength / (1024 * 1024)).toFixed(1) : media.formattedSize;

				const reader = response.body.getReader();
				const totalBytes = parseInt(contentLength, 10);
				let receivedBytes = 0;

				const stream = new ReadableStream({
					start(controller) {
						function push() {
							reader.read().then(({ done, value }) => {
								if (done) {
									controller.close();
									return;
								}
								receivedBytes += value.length;
								const percentComplete = Math.floor((receivedBytes / totalBytes) * 100);
								const loadedMB = (receivedBytes / (1024 * 1024)).toFixed(1);
								document.getElementById(progressBarId).style.width = `${percentComplete}%`;
								document.getElementById(progressBarId).textContent = `${percentComplete}%`;
								document.getElementById(loadedMBId).textContent = `${loadedMB} MB`;
								controller.enqueue(value);
								push();
							}).catch(err => {
								console.error('Stream reading error:', err);
							});
						}
						push();
					}
				});

				const blob = await new Response(stream).blob();
				const urlCreator = window.URL || window.webkitURL;
				const downloadUrl = urlCreator.createObjectURL(blob);

				const downloadBtn = document.createElement("a");
				downloadBtn.href = downloadUrl;
				downloadBtn.target = "_blank";
				const time = new Date().getTime();
				downloadBtn.download = `${WPURLS.suffix}-${media.quality}-${time}.${media.extension}`;
				document.body.appendChild(downloadBtn);
				downloadBtn.click();
				downloadBtn.remove();
				linkElements.forEach(linkElement => {
					linkElement.removeAttribute('data-disable');
				});
				document.getElementById(progressId).remove();
				showAlert(getTranslation(translations.currentLang, 'complete'), false);

			} catch (error) {
				console.error('Fetch error:', error);
				handleRetry();
			}
		}

		function handleRetry() {
			if (retryCount < maxRetries) {
				retryCount++;
				fetchAndHandleVideo(); // Retry
			} else {
				// Remove progress indicator and restore link elements
				document.getElementById(progressId).remove();
				linkElements.forEach(linkElement => {
					linkElement.removeAttribute('data-disable');
				});
				window.location.href = fallbackUrl;
			}
		}

		// Start the download process
		fetchAndHandleVideo();
	}






	const MX_translations ={
		"en": {
			"loading": "Video is loading",
			"progress_error": "Cannot calculate download progress.",
			"complete": "Download complete. On iPhone or iPad, open the 'Files' app to see the video."
		},
		"vi": {
			"loading": "Video đang được tải",
			"progress_error": "Không thể tính toán tiến trình tải xuống.",
			"complete": "Tải xuống hoàn tất. Trên iPhone, iPad bạn hãy vào ứng dụng Files để lấy video."
		},
		"nl": {
			"loading": "Video wordt geladen",
			"progress_error": "Kan de voortgang van het downloaden niet berekenen.",
			"complete": "Download voltooid. Op iPhone of iPad, open de 'Files' app om de video te zien."
		},
		"fr": {
			"loading": "Vidéo en cours de chargement",
			"progress_error": "Impossible de calculer la progression du téléchargement.",
			"complete": "Téléchargement terminé. Sur iPhone ou iPad, ouvrez l'application 'Files' pour voir la vidéo."
		},
		"de": {
			"loading": "Video wird geladen",
			"progress_error": "Fortschritt des Downloads kann nicht berechnet werden.",
			"complete": "Download abgeschlossen. Auf dem iPhone oder iPad die 'Files' App öffnen, um das Video zu sehen."
		},
		"pt-pt": {
			"loading": "O vídeo está a carregar",
			"progress_error": "Impossível calcular o progresso do download.",
			"complete": "Download concluído. No iPhone ou iPad, abra o aplicativo 'Files' para ver o vídeo."
		},
		"es": {
			"loading": "Video cargando",
			"progress_error": "No se puede calcular el progreso de la descarga.",
			"complete": "Descarga completa. En iPhone o iPad, abre la aplicación 'Files' para ver el video."
		},
		"ar": {
			"loading": "يتم تحميل الفيديو",
			"progress_error": "لا يمكن حساب تقدم التحميل.",
			"complete": "تم التنزيل بالكامل. على iPhone أو iPad، افتح تطبيق 'Files' لرؤية الفيديو."
		},
		"zh-hant": {
			"loading": "正在加載視頻",
			"progress_error": "無法計算下載進度。",
			"complete": "下載完成。在 iPhone 或 iPad 上，打開“Files”應用程式來查看視頻。"
		},
		"hi": {
			"loading": "वीडियो लोड हो रहा है",
			"progress_error": "डाउनलोड प्रगति की गणना नहीं की जा सकती।",
			"complete": "डाउनलोड पूर्ण हो गया है। iPhone या iPad पर, वीडियो देखने के लिए 'Files' ऐप खोलें।"
		},
		"id": {
			"loading": "Video sedang diunggah",
			"progress_error": "Tidak dapat menghitung progres unduhan.",
			"complete": "Unduhan selesai. Di iPhone atau iPad, buka aplikasi 'Files' untuk melihat video."
		},
		"it": {
			"loading": "Video in caricamento",
			"progress_error": "Impossibile calcolare il progresso del download.",
			"complete": "Download completato. Su iPhone o iPad, apri l'app 'Files' per vedere il video."
		},
		"ja": {
			"loading": "動画を読み込み中",
			"progress_error": "ダウンロードの進行状況を計算できません。",
			"complete": "ダウンロードが完了しました。iPhoneやiPadで、ビデオを見るために「Files」アプリを開いてください。"
		},
		"ko": {
			"loading": "비디오를 로딩 중",
			"progress_error": "다운로드 진행 상황을 계산할 수 없습니다.",
			"complete": "다운로드가 완료되었습니다. iPhone이나 iPad에서 'Files' 앱을 열어 비디오를 확인하세요."
		},
		"ru": {
			"loading": "Видео загружается",
			"progress_error": "Невозможно рассчитать прогресс загрузки.",
			"complete": "Скачивание завершено. На iPhone или iPad откройте приложение 'Files', чтобы увидеть видео."
		},
		"th": {
			"loading": "กำลังโหลดวิดีโอ",
			"progress_error": "ไม่สามารถคำนวณความคืบหน้าของการดาวน์โหลดได้",
			"complete": "ดาวน์โหลดเสร็จสมบูรณ์ บน iPhone หรือ iPad ให้เปิดแอป 'Files' เพื่อดูวิดีโอครับ/ค่ะ"
		},
		"tr": {
			"loading": "Video yükleniyor",
			"progress_error": "İndirme ilerlemesi hesaplanamıyor.",
			"complete": "İndirme tamamlandı. iPhone veya iPad'de videoyu görmek için 'Files' uygulamasını aç."
		}
	}
	function getTranslation(language, key) {
		if (MX_translations[language] && MX_translations[language][key]) {
			return MX_translations[language][key];
		} else if (MX_translations['en'] && MX_translations['en'][key]) {
			return MX_translations['en'][key];
		} else {
			return "Translation not found";
		}
	}
});