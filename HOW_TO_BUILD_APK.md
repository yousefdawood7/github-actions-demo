# كيفية تحويل المشروع إلى APK

هذا المشروع جاهز بالكامل (تطبيق Capacitor يحتوي على دليل تليفونات السيسكو الخاص بك)،
تبقّى فقط خطوة "البناء" (Build) لإنتاج ملف APK. عندي طريقتان لعمل ذلك:

---

## الطريقة 1 (الأسهل - بدون تثبيت أي برنامج): GitHub Actions

1. أنشئ حساب مجاني على github.com إذا لم يكن لديك واحد.
2. أنشئ Repository جديد (خاص أو عام، لا يهم).
3. ارفع كل محتويات هذا المجلد إلى الـ Repository. من سطر الأوامر:
   ```bash
   cd h-dawood-apk-project
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
4. بمجرد الرفع (push)، سيبدأ GitHub تلقائيًا في بناء التطبيق (لاحظ تبويب "Actions" في الصفحة).
   انتظر حتى تظهر علامة صح خضراء (يستغرق الأمر عادة 2-4 دقائق).
5. افتح الـ workflow run، وفي الأسفل ستجد قسم "Artifacts" واسمه `app-debug-apk` — حمّله.
   بداخله ستجد ملف `app-debug.apk` — هذا هو ملف التطبيق الجاهز للتثبيت.
6. انقل الملف لهاتفك (عبر USB أو رفعه على Drive) وثبّته
   (قد تحتاج للسماح بـ "التثبيت من مصادر غير معروفة" في إعدادات الأندرويد).

هذا الملف APK "debug" يعمل تمامًا وقابل للتثبيت، لكنه غير موقّع للنشر على متجر Google Play.
إذا أردت نشره على المتجر لاحقًا، أخبرني وسأشرح خطوات التوقيع (signing).

---

## الطريقة 2: على جهازك مباشرة عبر Android Studio

1. حمّل وثبّت [Android Studio](https://developer.android.com/studio) (مجاني).
2. عند أول تشغيل سيقوم تلقائيًا بتحميل Android SDK.
3. افتح المجلد `android` الموجود داخل هذا المشروع كمشروع في Android Studio
   (File → Open → اختر مجلد android).
4. انتظر حتى ينتهي من مزامنة Gradle (Gradle Sync) في المرة الأولى.
5. من القائمة: Build → Build Bundle(s) / APK(s) → Build APK(s).
6. سيظهر إشعار بمكان الملف الناتج، عادة في:
   `android/app/build/outputs/apk/debug/app-debug.apk`

---

## ملاحظات
- التطبيق يعمل بالكامل بدون إنترنت (كل البيانات مدمجة داخل script.js)، لذلك
  حذفت صلاحية الإنترنت من AndroidManifest.xml.
- اسم الحزمة (Package ID) الحالي هو: `com.hishamdawood.cisco.directory`
  يمكنك تغييره في `capacitor.config.json` وفي `android/app/build.gradle` قبل البناء لو أردت.
- أيقونة التطبيق حاليًا هي الأيقونة الافتراضية لـ Capacitor. أخبرني إذا كنت تريد
  أيقونة مخصصة وسأضيفها.
