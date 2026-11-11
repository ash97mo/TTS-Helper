const ttsData = {
    "theme": "dark",
    "creatorName": "Ashraf AbdElfattah",
    "tlName": "Hadeer Abdou Eldabie",
    "mainPools": [
        {
            "key": "FOLLOWUP",
            "title": "CC-Follow Up"
        },
        {
            "key": "MCU",
            "title": "MCU Call Center"
        },
        {
            "key": "IU",
            "title": "IU Maintenance"
        },
        {
            "key": "CUSTOM_1794074541102",
            "title": "Customer 360"
        },
        {
            "key": "ADVANCED",
            "title": "Second Level Advanced"
        },
        {
            "key": "INSTALLATION_OPS",
            "title": "Installation Operations"
        },
        {
            "key": "NOC",
            "title": "NOC"
        },
        {
            "key": "CLOSING_AUTOMATION",
            "title": "Automation in progress"
        }
    ],
    "sections": {
        "ADVANCED": [
            {
                "type": "case",
                "text": "Own The Case",
                "target": "TIME_FRAME"
            },
            {
                "type": "case",
                "text": "حاله تاني",
                "target": "ADV_OTHER"
            }
        ],
        "TIME_FRAME": [
            {
                "type": "step",
                "num": "١",
                "text": "مش هنعمل اي خطوات مع العميل&nbsp;"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل&nbsp; IR TTS Case ونابدت برقمها جوه الشكوه"
            },
            {
                "type": "note",
                "text": "ال SLA&nbsp;<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">&nbsp;هيتم التواصل معاك في خلال ١٥ دقيقة من جانب القسم القسم المختص من مواعيد العمل من ٨ صباحا ل ١١ مسا</span>"
            }
        ],
        "MCU": [
            {
                "type": "case",
                "text": "شكوه مفتوحة ورجعت من الـ IU خلال 5 أيام أو أقل",
                "decKey": "MCU_RETURNED_5DAYS"
            },
            {
                "type": "case",
                "text": "شكوه مفتوحة ورجعت من ال IU بعد أكثر من 5 أيام",
                "decKey": "MCU_RETURNED_OVER_5DAYS"
            },
            {
                "type": "case",
                "text": "شكوه مقفولة خلال 5 أيام وعنده نفس المشكلة",
                "decKey": "MCU_CLOSED_WITHIN_5DAYS"
            },
            {
                "type": "case",
                "text": "شكوة مقفولة أكثر 5 أيام&nbsp;",
                "decKey": "MCU_CLOSED_OVER_5DAYS"
            }
        ],
        "INSTALLATION_OPS": [
            {
                "type": "case",
                "text": "لو الخط تابع للقاهرة، الجيزة أو الإسكندرية",
                "decKey": "INSTALL_CAIRO"
            },
            {
                "type": "case",
                "text": "لو الخط تابع للمحافظات الأخرى والكباين",
                "decKey": "INSTALL_OTHER"
            }
        ],
        "CLOSING_AUTOMATION": [
            {
                "type": "case",
                "text": "الشكوه Automation in progress والعميل يطلب قفلها",
                "decKey": "CLOSE_AUTOMATION"
            },
            {
                "type": "case",
                "text": "شكوه من نوع NAS Port ID",
                "decKey": "CLOSE_NAS_PORT"
            },
            {
                "type": "case",
                "text": "شكوه Physical في الـ 3rd Level والعميل يطلب إغلاقها لأنها حُلت",
                "decKey": "CLOSE_PHYSICAL_3RD"
            }
        ],
        "SLS_FOLLOWUP": [
            {
                "type": "case",
                "text": "متابعة نفس المشكلة المفتوحة السابقة",
                "decKey": "COMMON_SAME"
            },
            {
                "type": "case",
                "text": "مشكلة جديدة مختلفة تماماً",
                "decKey": "COMMON_DIFF"
            }
        ],
        "IU": [
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة خلال المده",
                "decKey": "IU_SAME_WITHIN"
            },
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة وعدا المده",
                "decKey": "IU_SAME_PASS"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال ثانية خلال المده",
                "decKey": "IU_PHYS_WITHIN"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال ثانية وعدا المده",
                "target": "SEC_1794363456024"
            },
            {
                "type": "case",
                "text": "عندة مشكلة Logical",
                "decKey": "IU_LOGICAL"
            }
        ],
        "NOC": [
            {
                "type": "case",
                "text": "ما زالت ضمن الـ SLA (Within SLA)",
                "decKey": "NOC_WITHIN"
            },
            {
                "type": "case",
                "text": "تجاوزت المهلة المقررة (Pass SLA)",
                "decKey": "NOC_PASS"
            }
        ],
        "ADV_OTHER": [
            {
                "type": "case",
                "text": "متابعة نفس المشكلة المفتوحة السابقة",
                "decKey": "COMMON_SAME"
            },
            {
                "type": "case",
                "text": "مشكلة جديدة مختلفة تماماً",
                "decKey": "COMMON_DIFF"
            }
        ],
        "CUSTOM_1794074541102": [
            {
                "type": "case",
                "text": "<span style=\"font-weight: 400; text-align: start;\">&nbsp;مشكلتة فيزيكال&nbsp;</span>",
                "target": "SEC_1794356595043"
            },
            {
                "type": "case",
                "text": "&nbsp;مشكلته<br>&nbsp;<span style=\"font-size: 12px;\">Browsing او Unable to Obtain ip</span>",
                "target": "SEC_1794356613469"
            }
        ],
        "FOLLOWUP": [
            {
                "type": "case",
                "text": "مشكلة تاني",
                "target": "SEC_1794346437634"
            },
            {
                "type": "case",
                "text": "نفس المشكلة",
                "target": "SEC_1794346451785"
            }
        ],
        "POOL_1794337383186": [],
        "SEC_1794339390400": [],
        "SLS": [],
        "SEC_1794346437634": [
            {
                "type": "step",
                "num": "1",
                "text": "هنعمل TTS Case<div>ونحط فيه الخطوات</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR حل المشكله القديمه&nbsp;"
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR Case Need to be Escalated للمشكلة الجديده"
            },
            {
                "type": "note",
                "text": "ال SLA بتكون بتاعت المشكلة الجديده."
            }
        ],
        "SEC_1794346451785": [
            {
                "type": "step",
                "num": "١",
                "text": "هنعمل TTS Case<div>ونحط فيه الخطوات.</div>"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل SR ReEscalate للمشكله نفسها."
            },
            {
                "type": "note",
                "text": "ال SLA بتكون بتاعت نفس المشكلة."
            }
        ],
        "SEC_1794346471034": [
            {
                "type": "step",
                "num": "١",
                "text": "اضغط لكتابة تفاصيل الخطوة هنا..."
            },
            {
                "type": "step",
                "num": "٢",
                "text": "اضغط لكتابة تفاصيل الخطوة هنا..."
            }
        ],
        "SEC_1794356595043": [
            {
                "type": "step",
                "num": "1",
                "text": "مش هنعمل اي خطوات ونبلغ العميل&nbsp; أن مشكلتة قيد المعالجة وأنه هيتم المتابعة بمجرد الانتهاء من الفحص خلال ٤ ساعات"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو العميل وضح ان مشكلته الخدمة غير مستقرة هنعرض تعويض ٠١٥ ."
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR&nbsp;<div>Super agent - In progress&nbsp;</div>"
            }
        ],
        "SEC_1794356613469": [
            {
                "type": "step",
                "num": "1",
                "text": "هنتابع مع العميل خطوات المشكله اللي عنده&nbsp;<div>لو اتحلت هنعمل SR الحل للمشكله.</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو متحلتش واحتجنا نصعد هنقفلها ونصعد المشكلة اللوجيكال.&nbsp;"
            },
            {
                "type": "step",
                "num": "3",
                "text": "وهنعمل SR Manual TS Steps"
            },
            {
                "type": "note",
                "text": "ال SLA هتكون بتاعت المشكله اللوجيكال&nbsp;"
            }
        ],
        "SEC_1794363456024": [
            {
                "type": "step",
                "num": "1",
                "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
            },
            {
                "type": "step",
                "num": "2",
                "text": "هنعمل IR Delay ونابدت جوه عالشكوه."
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل IR Acceleration ونابدت جوه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR Follow After Sla.&nbsp;"
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            }
        ]
    },
    "sectionTitles": {
        "ADVANCED": "<span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">ما هي حالة الشكوه (Status)</span></span></span>",
        "TIME_FRAME": "📋 الخطوات المطلوبة:",
        "MCU": "<span style=\"font-size: 16px;\"><span style=\"font-size: 16px;\"><span style=\"font-size: 16px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">حدد موقف الشكوه داخل MCU Call Center:</span></span></span></span></span>",
        "INSTALLATION_OPS": "اختر نطاق الخط الجغرافي:",
        "CLOSING_AUTOMATION": "اختر حالة الغلق الخاصة:",
        "SLS_FOLLOWUP": "ما هو موقف العميل والمشكلة؟",
        "IU": "<span style=\"font-size: 14px;\">حدد موقف العميل في IU Maintenance:</span>",
        "NOC": "موقف الشكوه في NOC:",
        "ADV_OTHER": false,
        "CUSTOM_1794074541102": false,
        "FOLLOWUP": "<span style=\"font-size: 16px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 12px;\">اول حاجه نشوف اخر ابديت عالشكوه لو احتجتا نصعد :-</span></span></span></span>",
        "POOL_1794337383186": "خطوات ومسارات القسم الجديد:",
        "SEC_1794339390400": "خطوات ومسارات الحالة الجديدة:",
        "SLS": "خطوات ومسارات CC-Second Level Support / Pilot-SLS:",
        "SEC_1794346437634": "📋 الخطوات المطلوبة:",
        "SEC_1794346451785": "📋 الخطوات المطلوبة:",
        "SEC_1794346471034": "خطوات ومسارات الحالة الجديدة:",
        "SEC_1794356595043": "📋 الخطوات المطلوبة:",
        "SEC_1794356613469": "📋 الخطوات المطلوبة:",
        "SEC_1794363456024": "📋 الخطوات المطلوبة:"
    },
    "decisions": {
        "ADV_TIME_IN": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "مش هنعمل اي خطوات مع العميل&nbsp;"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنعمل&nbsp; IR TTS Case ونابدت برقمها جوه الشكوه"
                },
                {
                    "type": "note",
                    "text": "ال SLA&nbsp;<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">&nbsp;هيتم التواصل معاك في خلال ١٥ دقيقة من جانب القسم المختص.</span>"
                }
            ]
        },
        "ADV_TIME_OUT": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "مش هنعمل اي خطوات مع العميل&nbsp;"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنعمل IR tts case ونابدت برقمها جوه الشكوة ."
                },
                {
                    "type": "note",
                    "text": "ال SLA&nbsp;<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">&nbsp;هيتم التواصل معاك في خلال ١٥ دقيقة من جانب القسم القسم المختص من مواعيد العمل من ٨ صباحا ل ١١ مسا</span>"
                }
            ]
        },
        "MCU_RETURNED_5DAYS": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "لمشاكل BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b>&nbsp;للتأكد من عدم حلها.</div>"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنابدت الخطوات جوه الشكوه في TTS ونرفعها لل IU."
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعمل SR ReEscalate للشكوه الموجوده في TTS."
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل <span style=\"padding: 1px 4px; border-radius: 3px;\"><font color=\"#000000\"><span style=\"background-color: rgb(254, 240, 138);\">IR Acceleration</span></font>&nbsp;ونابدت بيه جوه الشكوه لو</span>مش حياة كريمة"
                },
                {
                    "type": "step",
                    "num": "5",
                    "text": "<div>لو عدت ٢٤ ساعه من وقت اول تصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "MCU_RETURNED_OVER_5DAYS": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنمشي Troubleshooting كاملة من البداية مع العميل."
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "لو احتجنا نصعد لازم نقفل الشكوه الحالية نهائياً عشان عدا أكثر من 5 أيام. ونصعد الشكوه الجديده."
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل <span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">IR Rework</span><div>وهنابدت بيه جوه الشكوه&nbsp; لو مش حياة كريمه.</div>"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "MCU_CLOSED_WITHIN_5DAYS": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنعمل&nbsp;<b>شكوه جديدة&nbsp;</b>فوراً دون تكرار الفحص."
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "نسخ خطوات الـ Troubleshooting بالكامل من الشكوه القديمه."
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعمل <span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">IR Rework</span>&nbsp;ونابدت بيه جوه الشكوه لو مش حياة كريمه."
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "MCU_CLOSED_OVER_5DAYS": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "إعادة عمل خطوات الفحص كاملة مع العميل من البداية لتجاوز مهلة 5 أيام."
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "🚫 ممنوع نهائياً نسخ خطوات الفحص القديمة لأنها غير مقبولة بعد 5 أيام."
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعمل <span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">IR Rework</span> لو الشكوه القديمه رجعت من ال iu في خلال ٣٠ يوم .<div>لو مش حياة كريمه</div>"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "INSTALL_CAIRO": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "إصلاح البورتات التالفة وتعديل بيانات الـ Matrix للخطوط التابعة للمنطقة."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "مدة الإصلاح يومين عمل <b>(2 Working Days)</b>."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "في حال تجاوز المهلة الزمنية يتم عمل تجديد للمهلة."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "فتح <b>SR متابعة / استعجال</b> على نظام BSS."
                }
            ]
        },
        "INSTALL_OTHER": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "إصلاح البورتات وتعديل الـ Matrix للكباين وباقي المحافظات (MSAN / Cabins / UNO / Cable)."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "مدة الإصلاح خمسة أيام عمل <b>(5 Working Days)</b>."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "في حال تجاوز المهلة الزمنية يتم عمل تجديد للمهلة."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "فتح <b>SR متابعة / استعجال</b> على نظام BSS."
                }
            ]
        },
        "COMMON_SAME": {
            "items": []
        },
        "COMMON_DIFF": {
            "items": []
        },
        "NOC_WITHIN": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "مراجعة وتطبيق تعليمات الـ Update الوارد من مهندسي NOC مع العميل."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "هنأبدت عالشكوه بأن العميل يتابع معنا."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "إبلاغ العميل بأن الشكوه ما زالت <b>ضمن المهلة المقررة</b> للصيانة."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "فتح <b>SR متابعة عادية</b> على نظام BSS."
                }
            ]
        },
        "NOC_PASS": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "مراجعة آخر Update وتطبيقه مع العميل."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "رفع شكوه تأخير <b>(Delay Ticket)</b> على الشكوه الحالية بالـ TTS."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "هنأبدت عالشكوه بطلب الاستعجال لتجاوز الوقت المحدد."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "إبلاغ العميل بتصعيد الشكوه كحالة تأخير لتخطيها الـ SLA المعتمدة."
                },
                {
                    "type": "step",
                    "num": "٥",
                    "text": "فتح <b>SR Delay</b> على نظام BSS."
                }
            ]
        },
        "IU_SAME_WITHIN": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنعرض تعويض ٠١٥ لو متعرضش  والشكوه physical instability او BLQ.&nbsp;<div>او Voice down وعليها ابديت بان عنده مشكله في النت  ٣ جيجا لمده يومين</div>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعمل SR Follow up Within sla"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "IU_SAME_PASS": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنعمل IR Acceleration ونابدت بيه عالشكوه&nbsp; لو مش حياة كريمة"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنعمل IR Delay<div>ونابدت بيه جوه عالشكوه.</div>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل SR Follow After Sla.&nbsp;"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "IU_PHYS_WITHIN": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل SR Follow Up&nbsp; Within."
                },
                {
                    "type": "step",
                    "num": "5",
                    "text": "<div>هنعرض تعويض ٠١٥ لو متعرضش&nbsp; والشكوه physical instability او BLQ.&nbsp;</div><div><div>او Voice down وعليها ابديت بان عنده مشكله في النت&nbsp; ٣ جيجا لمده يومين</div></div>"
                },
                {
                    "type": "note",
                    "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
                }
            ]
        },
        "IU_LOGICAL": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "هنمشي خطوات المشكلة ال Logical لو اتحلت هنعمل SR الحل."
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "لو اتحلت او متحلتش هنابدت بالخطوات عالشكوه."
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنعمل IR TTS Case ونحط فيها الخطوات&nbsp;"
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل SR Case need to be Escalated&nbsp; للمشكلة الجديده"
                },
                {
                    "type": "note",
                    "text": "ال SLA بتكون بتاعت المشكله اللوجيكال الجديده."
                }
            ]
        },
        "CLOSE_AUTOMATION": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "🚫 ممنوع نهائياً غلق الشكوه حتى لو طلب العميل ذلك بحجة حلها أو طلب تعويض."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "إبلاغ العميل بأن طلب التعويض متاح <b>فقط بعد انتهاء المراجعة الآلية وغلق الشكوه رسمياً</b>."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "إذا كان لدى العميل عطل فني آخر: يتم فحصه وفتح شكوه مستقلة به دون المساس بشكوه الأوتوميشن."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "عدم فتح أي SR إغلاق للشكوه الحالية على BSS."
                },
                {
                    "type": "note",
                    "text": "🗣️ يُقال للعميل: \"الشكوه قيد المراجعة الآلية النهائية، يرجى انتظار مكالمة التأكيد، وبعدها يمكنك التواصل لطلب التعويض عن فترة العطل.\""
                }
            ]
        },
        "CLOSE_NAS_PORT": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "التأكد من اكتمال المعالجة الفنية الخاصة بالـ NAS Port."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "إغلاق الشكوه وجوباً باختيار سبب إغلاق إلزامي وهو: <b>[removed nas port]</b>."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "يطبق سبب الإغلاق الإلزامي حتى لو حُلت المشكلة أثناء المكالمة."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "الإغلاق فوري للشكوه بعد التأكد من حلها."
                },
                {
                    "type": "step",
                    "num": "٥",
                    "text": "فتح <b>SR إغلاق</b> مطابق على نظام BSS."
                }
            ]
        },
        "CLOSE_PHYSICAL_3RD": {
            "items": [
                {
                    "type": "step",
                    "num": "١",
                    "text": "🚫 لا تقم بغلق الشكوه نهائياً بناءً على طلب العميل فقط."
                },
                {
                    "type": "step",
                    "num": "٢",
                    "text": "إبلاغ العميل بضرورة انتظار مكالمة التأكيد (Follow up confirmation) من الصيانة."
                },
                {
                    "type": "step",
                    "num": "٣",
                    "text": "انتظار دورة استقرار الخدمة المعتمدة قبل الإغلاق لضمان عدم تكرار العطل."
                },
                {
                    "type": "step",
                    "num": "٤",
                    "text": "فتح <b>SR استفسار / متابعة</b> على BSS دون إغلاق الشكوه."
                },
                {
                    "type": "note",
                    "text": "🗣️ يُقال للعميل: \"يرجى انتظار مكالمة التأكيد النهائية من الفريق الفني للتأكد التام من استقرار خطك وزوال العطل.\""
                }
            ]
        }
    }
};