const ttsData = {
    "theme": "dark",
    "creatorName": "Ashraf AbdElfattah",
    "tlName": "Hadeer Abdou Eldabie",
    "mainPools": [
        {"key":"ADVANCED","title":"Second Level Advanced"},
        {"key":"SLS","title":"CC-Second Level Support / Pilot-SLS"},
        {"key":"FOLLOWUP","title":"CC-Follow up / Pilot-Follow up"},
        {"key":"IU","title":"IU Maintenance"},
        {"key":"NOC","title":"NOC"},
        {"key":"MCU","title":"MCU Call Center"},
        {"key":"INSTALLATION_OPS","title":"Installation Operations"},
        {"key":"CLOSING_AUTOMATION","title":"Automation in progress"},
        {"key":"CUSTOM_1794074541102","title":"Customer 360"}
    ],
    "sections": {
        "ADVANCED": [
            {"type":"case","text":"الحالة هي: Own The Case","target":"TIME_FRAME"},
            {"type":"case","text":"حالة أخرى (ليست Own The Case)","target":"ADV_OTHER"}
        ],
        "TIME_FRAME": [
            {"type":"case","text":"نعم (داخل المواعيد: 8AM to 11PM)","decKey":"ADV_TIME_IN"},
            {"type":"case","text":"لا (خارج المواعيد: بعد 11PM أو قبل 8AM)","decKey":"ADV_TIME_OUT"}
        ],
        "MCU": [
            {"type":"case","text":"شكوه فيزيكال رجعت من الـ IU في خلال 5 أيام أو أقل","decKey":"MCU_RETURNED_5DAYS"},
            {"type":"case","text":"شكوه فيزيكال رجعت بعد أكثر من 5 أيام","decKey":"MCU_RETURNED_OVER_5DAYS"},
            {"type":"case","text":"العميل يشتكي بعد غلقها في خلال 5 أيام","decKey":"MCU_CLOSED_WITHIN_5DAYS"},
            {"type":"case","text":"العميل يشتكي بعد غلقها بأكثر من 5 أيام","decKey":"MCU_CLOSED_OVER_5DAYS"}
        ],
        "INSTALLATION_OPS": [
            {"type":"case","text":"لو الخط تابع للقاهرة، الجيزة أو الإسكندرية","decKey":"INSTALL_CAIRO"},
            {"type":"case","text":"لو الخط تابع للمحافظات الأخرى والكباين","decKey":"INSTALL_OTHER"}
        ],
        "CLOSING_AUTOMATION": [
            {"type":"case","text":"الشكوه Automation in progress والعميل يطلب قفلها","decKey":"CLOSE_AUTOMATION"},
            {"type":"case","text":"شكوه من نوع NAS Port ID","decKey":"CLOSE_NAS_PORT"},
            {"type":"case","text":"شكوه Physical في الـ 3rd Level والعميل يطلب إغلاقها لأنها حُلت","decKey":"CLOSE_PHYSICAL_3RD"}
        ],
        "SLS_FOLLOWUP": [
            {"type":"case","text":"متابعة نفس المشكلة المفتوحة السابقة","decKey":"COMMON_SAME"},
            {"type":"case","text":"مشكلة جديدة مختلفة تماماً","decKey":"COMMON_DIFF"}
        ],
        "IU": [
            {"type":"case","text":"متابعة نفس المشكلة الفيزيكال في IU (Within SLA)","decKey":"IU_SAME_WITHIN"},
            {"type":"case","text":"متابعة نفس المشكلة الفيزيكال في IU (Pass SLA)","decKey":"IU_SAME_PASS"},
            {"type":"case","text":"تغيير لمشكلة فيزيكال ثانية في IU","decKey":"IU_PHYS_WITHIN"},
            {"type":"case","text":"شكوه Physical في IU والعميل لديه مشكلة Logical","decKey":"IU_LOGICAL"}
        ],
        "NOC": [
            {"type":"case","text":"ما زالت ضمن الـ SLA (Within SLA)","decKey":"NOC_WITHIN"},
            {"type":"case","text":"تجاوزت المهلة المقررة (Pass SLA)","decKey":"NOC_PASS"}
        ],
        "ADV_OTHER": [
            {"type":"case","text":"متابعة نفس المشكلة المفتوحة السابقة","decKey":"COMMON_SAME"},
            {"type":"case","text":"مشكلة جديدة مختلفة تماماً","decKey":"COMMON_DIFF"}
        ],
        "CUSTOM_1794074541102": [
            {"type":"step","num":"١","text":"اضغط لكتابة تفاصيل الخطوة هنا..."}
        ]
    },
    "sectionTitles": {
        "ADVANCED": "ما هي حالة الشكوه (Status) داخل القسم؟",
        "TIME_FRAME": "هل وقت المكالمة الآن داخل مواعيد العمل (من 8:00 صباحاً حتى 11:00 مساءً)؟",
        "MCU": "حدد موقف الشكوه داخل MCU Call Center:",
        "INSTALLATION_OPS": "اختر نطاق الخط الجغرافي:",
        "CLOSING_AUTOMATION": "اختر حالة الغلق الخاصة:",
        "SLS_FOLLOWUP": "ما هو موقف العميل والمشكلة؟",
        "IU": "حدد موقف العميل في IU Maintenance:",
        "NOC": "موقف الشكوه في NOC:",
        "ADV_OTHER": "ما هو موقف العميل والمشكلة؟",
        "CUSTOM_1794074541102": "خطوات وملاحظات Customer 360:"
    },
    "decisions": {
        "ADV_TIME_IN": {
            "items": [
                {"type":"step","num":"١","text":"<b>[Troubleshooting]</b> ممنوع نهائياً عمل أي خطوات Troubleshooting مع العميل."},
                {"type":"step","num":"٢","text":"عمل IR tts case فوراً."},
                {"type":"step","num":"٣","text":"اختيار <b>Second Level Advanced</b> داخل خانة Case Type / Pool بالـ IR."},
                {"type":"step","num":"٤","text":"تسجيل رقم الـ IR Record بالكامل داخل خانة الملاحظات في الـ TTS."},
                {"type":"step","num":"٥","text":"إبلاغ العميل بأن المتابعة والتواصل معه ستتم خلال <b>15 دقيقة</b>."},
                {"type":"step","num":"٦","text":"فتح <b>SR متابعة / تصعيد TTs Cases</b> على نظام BSS."},
                {"type":"step","num":"٧","text":"🚫 ممنوع نهائياً سحب الشكوه (Withdrawing) من هذا القسم."},
                {"type":"note","text":"🗣️ يُقال للعميل نصاً: \"تم تصعيد شكوتك وسيتم التواصل معك ومتابعة حالتك خلال 15 دقيقة لحل المشكلة.\""}
            ]
        },
        "ADV_TIME_OUT": {
            "items": [
                {"type":"step","num":"١","text":"عمل IR tts case واختيار Second Level Advanced."},
                {"type":"step","num":"٢","text":"تسجيل رقم الـ IR Record داخل الـ TTS."},
                {"type":"step","num":"٣","text":"إبلاغ العميل بالتواصل معه فور بدء العمل في <b>الساعة 8:00 صباحاً</b>."},
                {"type":"step","num":"٤","text":"فتح <b>SR متابعة TTs Cases</b> على نظام BSS."},
                {"type":"step","num":"٥","text":"عدم إبلاغ العميل بمهلة الـ 15 دقيقة لانتهاء مواعيد العمل الرسمية."},
                {"type":"note","text":"🗣️ يُقال للعميل: \"تم تسجيل الشكوه وسيتم التواصل معك ومتابعة حالتك فور بدء مواعيد عمل القسم المختص صباحاً (8:00 ص).\""}
            ]
        },
        "MCU_RETURNED_5DAYS": {
            "items": [
                {"type":"step","num":"١","text":"<b>[Troubleshooting]</b> تطبيق خطوات الفحص الطبيعية والتصعيد على <b>نفس شكوه الـ TTS</b>."},
                {"type":"step","num":"٢","text":"تشغيل <b>ASSIA Clear view</b> بنمط (Last fix within 24h) لمشاكل BLQ و Instability للتأكد من عدم حلها."},
                {"type":"step","num":"٣","text":"🚫 ممنوع نهائياً تعديل Title الشكوه أو Problem أو الـ Category."},
                {"type":"step","num":"٤","text":"تجديد المهلة بناءً على نوع المشكلة بعد استيفاء خطوات الفحص."},
                {"type":"step","num":"٥","text":"فتح <b>Re-escalation SR</b> على نظام BSS."}
            ]
        },
        "MCU_RETURNED_OVER_5DAYS": {
            "items": [
                {"type":"step","num":"١","text":"غلق (Close) الشكوه الحالية نهائياً على النظام لمرور أكثر من 5 أيام."},
                {"type":"step","num":"٢","text":"إعادة خطوات الفحص والـ Troubleshooting كاملة من البداية مع العميل."},
                {"type":"step","num":"٣","text":"إنشاء <b>شكوه جديدة كلياً</b> على الـ TTS وتصعيدها للمسار الصحيح."},
                {"type":"step","num":"٤","text":"احتساب مهلة كاملة جديدة للشكوه الجديدة من تاريخ الإنشاء."},
                {"type":"step","num":"٥","text":"فتح <b>SR جديد</b> مناسب للشكوه الجديدة على نظام BSS."}
            ]
        },
        "MCU_CLOSED_WITHIN_5DAYS": {
            "items": [
                {"type":"step","num":"١","text":"مراجعة سجل شكاوى العميل السابق (Complaint History)."},
                {"type":"step","num":"٢","text":"إنشاء <b>شكوه جديدة (New Ticket)</b> فوراً دون تكرار الفحص."},
                {"type":"step","num":"٣","text":"نسخ خطوات الـ Troubleshooting بالكامل من الشكوه السابقة كما هي."},
                {"type":"step","num":"٤","text":"إبلاغ العميل بالمهلة المعتمدة من تاريخ الشكوه الجديدة."},
                {"type":"step","num":"٥","text":"فتح <b>SR جديد</b> تصعيد على نظام BSS."}
            ]
        },
        "MCU_CLOSED_OVER_5DAYS": {
            "items": [
                {"type":"step","num":"١","text":"إعادة عمل خطوات الفحص كاملة مع العميل من البداية لتجاوز مهلة 5 أيام."},
                {"type":"step","num":"٢","text":"🚫 ممنوع نهائياً نسخ خطوات الفحص القديمة لأنها غير مقبولة بعد 5 أيام."},
                {"type":"step","num":"٣","text":"إنشاء شكوه جديدة وتصعيدها بالبيانات الحديثة على الـ TTS."},
                {"type":"step","num":"٤","text":"إبلاغ العميل بالمهلة الكاملة المقررة للشكوه."},
                {"type":"step","num":"٥","text":"فتح <b>SR جديد</b> بالبيانات المحدثة على نظام BSS."}
            ]
        },
        "INSTALL_CAIRO": {
            "items": [
                {"type":"step","num":"١","text":"إصلاح البورتات التالفة وتعديل بيانات الـ Matrix للخطوط التابعة للمنطقة."},
                {"type":"step","num":"٢","text":"مدة الإصلاح يومين عمل <b>(2 Working Days)</b>."},
                {"type":"step","num":"٣","text":"في حال تجاوز المهلة الزمنية يتم عمل تجديد للمهلة."},
                {"type":"step","num":"٤","text":"فتح <b>SR متابعة / استعجال</b> على نظام BSS."}
            ]
        },
        "INSTALL_OTHER": {
            "items": [
                {"type":"step","num":"١","text":"إصلاح البورتات وتعديل الـ Matrix للكباين وباقي المحافظات (MSAN / Cabins / UNO / Cable)."},
                {"type":"step","num":"٢","text":"مدة الإصلاح خمسة أيام عمل <b>(5 Working Days)</b>."},
                {"type":"step","num":"٣","text":"في حال تجاوز المهلة الزمنية يتم عمل تجديد للمهلة."},
                {"type":"step","num":"٤","text":"فتح <b>SR متابعة / استعجال</b> على نظام BSS."}
            ]
        },
        "COMMON_SAME": {
            "items": [
                {"type":"step","num":"١","text":"الالتزام بما ورد في آخر <b>Update</b> مسجل بالشكوه وتطبيقه مع العميل."},
                {"type":"step","num":"٢","text":"عمل خطوات الفحص والتأكد من المشكلة الحالية."},
                {"type":"step","num":"٣","text":"تشغيل ASSIA Clear view بنمط (Last fix within 24h) لحالات BLQ و Instability."},
                {"type":"step","num":"٤","text":"مراجعة Voice verification وتاريخ الفاتورة لتجنب رفض الشكوه."},
                {"type":"step","num":"٥","text":"تحديث الشكوه خلال <b>5 دقائق كحد أقصى</b> بعد المكالمة."},
                {"type":"step","num":"٦","text":"عمل IR tts case باختيار اسم القسم الحالي في خانة Case Type / Pool."},
                {"type":"step","num":"٧","text":"فتح <b>Re-escalation SR</b> على نظام BSS."},
                {"type":"step","num":"٨","text":"🚫 ممنوع نهائياً عمل Withdrawing للشكوه من هذا القسم."}
            ]
        },
        "COMMON_DIFF": {
            "items": [
                {"type":"step","num":"١","text":"عمل خطوات الفحص والـ Troubleshooting كاملة للمشكلة الجديدة."},
                {"type":"step","num":"٢","text":"هنأبدت بالخطوات عالشكوه بالتفصيل للمشكلة الجديدة."},
                {"type":"step","num":"٣","text":"إبلاغ العميل بالمهلة المقررة لنوع المشكلة الجديدة فقط."},
                {"type":"step","num":"٤","text":"عمل IR tts case مع تدوين رقم الـ IR داخل الشكوه."},
                {"type":"step","num":"٥","text":"إنشاء <b>\"Case needs to be escalated\" SR</b> الخاص بالمشكلة الجديدة."},
                {"type":"step","num":"٦","text":"فتح <b>Solvent SR</b> على نظام BSS."},
                {"type":"step","num":"٧","text":"🚫 ممنوع سحب (Withdraw) الشكوه السابقة."}
            ]
        },
        "NOC_WITHIN": {
            "items": [
                {"type":"step","num":"١","text":"مراجعة وتطبيق تعليمات الـ Update الوارد من مهندسي NOC مع العميل."},
                {"type":"step","num":"٢","text":"هنأبدت عالشكوه بأن العميل يتابع معنا."},
                {"type":"step","num":"٣","text":"إبلاغ العميل بأن الشكوه ما زالت <b>ضمن المهلة المقررة</b> للصيانة."},
                {"type":"step","num":"٤","text":"فتح <b>SR متابعة عادية</b> على نظام BSS."}
            ]
        },
        "NOC_PASS": {
            "items": [
                {"type":"step","num":"١","text":"مراجعة آخر Update وتطبيقه مع العميل."},
                {"type":"step","num":"٢","text":"رفع شكوه تأخير <b>(Delay Ticket)</b> على الشكوه الحالية بالـ TTS."},
                {"type":"step","num":"٣","text":"هنأبدت عالشكوه بطلب الاستعجال لتجاوز الوقت المحدد."},
                {"type":"step","num":"٤","text":"إبلاغ العميل بتصعيد الشكوه كحالة تأخير لتخطيها الـ SLA المعتمدة."},
                {"type":"step","num":"٥","text":"فتح <b>SR Delay</b> على نظام BSS."}
            ]
        },
        "IU_SAME_WITHIN": {
            "items": [
                {"type":"step","num":"١","text":"عمل IR acceleration فوري لاستعجال فحص الشبكة."},
                {"type":"step","num":"٢","text":"هنأبدت عالشكوه بالمتابعة وعمل IR acceleration."},
                {"type":"step","num":"٣","text":"إبلاغ العميل بأن الشكوه ما زالت قيد المتابعة مع فريق الصيانة."},
                {"type":"step","num":"٤","text":"فتح <b>SR متابعة عادية</b> على نظام BSS."}
            ]
        },
        "IU_SAME_PASS": {
            "items": [
                {"type":"step","num":"١","text":"عمل IR acceleration إلزامي."},
                {"type":"step","num":"٢","text":"رفع شكوه تأخير <b>(Delay Ticket)</b> على الشكوه بالـ TTS."},
                {"type":"step","num":"٣","text":"هنأبدت عالشكوه بطلب الاستعجال وتفاصيل متابعة وتأخير العميل."},
                {"type":"step","num":"٤","text":"إبلاغ العميل بتصعيد الشكوه كحالة تأخير لتخطيها مهلة الصيانة."},
                {"type":"step","num":"٥","text":"فتح <b>SR Delay</b> على نظام BSS."}
            ]
        },
        "IU_PHYS_WITHIN": {
            "items": [
                {"type":"step","num":"١","text":"🚫 لا تقم بفتح شكوه جديدة إطلاقاً."},
                {"type":"step","num":"٢","text":"هنأبدت عالشكوه بتفاصيل المشكلة الفيزيكال الجديدة."},
                {"type":"step","num":"٣","text":"عمل IR acceleration وتحديث البيانات."},
                {"type":"step","num":"٤","text":"إبلاغ العميل بالمهلة الخاصة بالمشكلة الفيزيكال الجديدة."},
                {"type":"step","num":"٥","text":"تحديث بيانات الـ SR الحالي أو فتح <b>SR متابعة</b> على نظام BSS."}
            ]
        },
        "IU_LOGICAL": {
            "items": [
                {"type":"step","num":"١","text":"التأكد أولاً من حل المشكلة الفيزيكال بوجود <b>System Evidence</b> وتواجد العميل بمكان الخدمة."},
                {"type":"step","num":"٢","text":"عمل خطوات الفحص كاملة للمشكلة الـ Logical."},
                {"type":"step","num":"٣","text":"لو اتحلت بالمكالمة: هنأبدت بالخطوات عالشكوه فقط و 🚫 ممنوع نهائياً سحب أو غلق الشكوه."},
                {"type":"step","num":"٤","text":"لو لم تُحل: هنأبدت بالخطوات عالشكوه بالتفصيل لجميع خطوات الـ Troubleshooting."},
                {"type":"step","num":"٥","text":"في حال التصعيد يبلغ العميل بالمهلة المقررة للمشكلة اللوجيكال."},
                {"type":"step","num":"٦","text":"عمل IR tts case واختيار IU Maintenance في خانة Case Type/Pool."},
                {"type":"step","num":"٧","text":"فتح <b>\"Case needs to be escalated\" SR</b> على نظام BSS."}
            ]
        },
        "CLOSE_AUTOMATION": {
            "items": [
                {"type":"step","num":"١","text":"🚫 ممنوع نهائياً غلق الشكوه حتى لو طلب العميل ذلك بحجة حلها أو طلب تعويض."},
                {"type":"step","num":"٢","text":"إبلاغ العميل بأن طلب التعويض متاح <b>فقط بعد انتهاء المراجعة الآلية وغلق الشكوه رسمياً</b>."},
                {"type":"step","num":"٣","text":"إذا كان لدى العميل عطل فني آخر: يتم فحصه وفتح شكوه مستقلة به دون المساس بشكوه الأوتوميشن."},
                {"type":"step","num":"٤","text":"عدم فتح أي SR إغلاق للشكوه الحالية على BSS."},
                {"type":"note","text":"🗣️ يُقال للعميل: \"الشكوه قيد المراجعة الآلية النهائية، يرجى انتظار مكالمة التأكيد، وبعدها يمكنك التواصل لطلب التعويض عن فترة العطل.\""}
            ]
        },
        "CLOSE_NAS_PORT": {
            "items": [
                {"type":"step","num":"١","text":"التأكد من اكتمال المعالجة الفنية الخاصة بالـ NAS Port."},
                {"type":"step","num":"٢","text":"إغلاق الشكوه وجوباً باختيار سبب إغلاق إلزامي وهو: <b>[removed nas port]</b>."},
                {"type":"step","num":"٣","text":"يطبق سبب الإغلاق الإلزامي حتى لو حُلت المشكلة أثناء المكالمة."},
                {"type":"step","num":"٤","text":"الإغلاق فوري للشكوه بعد التأكد من حلها."},
                {"type":"step","num":"٥","text":"فتح <b>SR إغلاق</b> مطابق على نظام BSS."}
            ]
        },
        "CLOSE_PHYSICAL_3RD": {
            "items": [
                {"type":"step","num":"١","text":"🚫 لا تقم بغلق الشكوه نهائياً بناءً على طلب العميل فقط."},
                {"type":"step","num":"٢","text":"إبلاغ العميل بضرورة انتظار مكالمة التأكيد (Follow up confirmation) من الصيانة."},
                {"type":"step","num":"٣","text":"انتظار دورة استقرار الخدمة المعتمدة قبل الإغلاق لضمان عدم تكرار العطل."},
                {"type":"step","num":"٤","text":"فتح <b>SR استفسار / متابعة</b> على BSS دون إغلاق الشكوه."},
                {"type":"note","text":"🗣️ يُقال للعميل: \"يرجى انتظار مكالمة التأكيد النهائية من الفريق الفني للتأكد التام من استقرار خطك وزوال العطل.\""}
            ]
        }
    }
};