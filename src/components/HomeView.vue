<template>
    <section id="features" class="container py-5">
            <h2 class="text-center mb-5 fw-bold">我們的特色</h2>
            <div class="row text-center">
                <div class="col-md-4 mb-4">
                    <div class="card card-custom p-4">
                        <div class="card-body">
                            <i class="bi bi-gear-fill feature-icon"></i> <h5 class="card-title fw-bold mt-3">交流</h5>
                            <p class="card-text">提供客製化的解決方案，滿足您的所有需求。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card card-custom p-4">
                        <div class="card-body">
                            <i class="bi bi-lightning-fill feature-icon"></i>
                            <h5 class="card-title fw-bold mt-3">文化</h5>
                            <p class="card-text">優化效能，讓您的用戶享受流暢無比的操作。</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card card-custom p-4">
                        <div class="card-body">
                            <i class="bi bi-shield-fill-check feature-icon"></i>
                            <h5 class="card-title fw-bold mt-3">安全可靠</h5>
                            <p class="card-text">採用業界最高標準，確保您的資料安全無虞。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class=" py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop" class="img-fluid rounded-3" alt="關於我們">
                    </div>
                    <div class="col-md-6">
                        <h2 class="fw-bold mb-4">我們是誰？</h2>
                        <p class="lead">我們是一群充滿熱情的開發者，致力於為客戶提供創新且實用的數位解決方案。</p>
                        <p>從小型專案到大型企業系統，我們都將以專業、熱情的態度，為您打造獨一無二的產品。</p>
                        <button type="button" class="btn btn-outline-light mt-3">了解更多</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="py-5">
            <div class="container">
                <h2 class="text-center fw-bold mb-5">聯絡我們</h2>
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <form class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="contactName" class="form-label">姓名</label>
                                <input type="text" class="form-control" id="contactName" required>
                                <div class="invalid-feedback">請輸入您的姓名。</div>
                            </div>
                            <div class="mb-3">
                                <label for="contactEmail" class="form-label">信箱</label>
                                <input type="email" class="form-control" id="contactEmail" required>
                                <div class="invalid-feedback">請輸入有效的電子郵件。</div>
                            </div>
                            <div class="mb-3">
                                <label for="contactMessage" class="form-label">訊息</label>
                                <textarea class="form-control" id="contactMessage" rows="4" required></textarea>
                                <div class="invalid-feedback">請輸入您的訊息。</div>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-brand btn-lg" type="submit">送出</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

</template>

<script setup lang="ts">
// 表單驗證的 JavaScript
(function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation') as NodeListOf<HTMLFormElement>
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
</script>

<style scoped>
section {
    color: white;
}
.card-custom {
    border: none;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-custom:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-icon {
    font-size: 3rem;
    color: #6c757d;
    /* 灰色 */
}

.btn-brand {
    background-color: #ff5722;
    /* 鮮豔的橙色 */
    border-color: #ff5722;
    color: white;
    transition: background-color 0.3s ease;
}

.btn-brand:hover {
    background-color: #e64a19;
    border-color: #e64a19;
}
</style>