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
            "key": "POOL_1794366041775",
            "title": "<div>SLS - IVR Automation</div>"
        },
        {
            "key": "INSTALLATION_OPS",
            "title": "Installation Operations"
        },
        {
            "key": "ADVANCED",
            "title": "Second Level Advanced"
        },
        {
            "key": "POOL_1794487315512",
            "title": "Second Level Support&nbsp;"
        },
        {
            "key": "POOL_1794487341327",
            "title": "Pilot-SLS"
        },
        {
            "key": "NOC",
            "title": "NOC"
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
                "target": "SEC_1794489870945"
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
                "text": "هنعمل <span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">TTS Case</span> ونابدت برقمها جوه الشكوه"
            },
            {
                "type": "note",
                "text": "ال SLA&nbsp;<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">&nbsp;هيتم التواصل معاك في خلال ١٥ دقيقة من جانب القسم القسم المختص من مواعيد العمل من ٨ صباحا ل ١١ مسا</span>"
            }
        ],
        "MCU": [
            {
                "type": "case",
                "text": "شكوة متصعده من <span style=\"color: rgb(250, 204, 21);\">IVR</span> ومراحتش لل <span style=\"color: rgb(250, 204, 21);\">IU</span>",
                "target": "SEC_1794390971766"
            },
            {
                "type": "case",
                "text": "مفتوحة ورجعت من الـ <span style=\"color: rgb(250, 204, 21);\"><span style=\"color: rgb(56, 189, 248);\">IU</span></span> خلال <span style=\"color: rgb(56, 189, 248);\">5</span> أيام&nbsp;",
                "decKey": "MCU_RETURNED_5DAYS"
            },
            {
                "type": "case",
                "text": "مفتوحة ورجعت من ال <span style=\"color: rgb(56, 189, 248);\">IU</span> بعد أكثر من <span style=\"color: rgb(56, 189, 248);\">5</span> أيام",
                "decKey": "MCU_RETURNED_OVER_5DAYS"
            },
            {
                "type": "case",
                "text": "&nbsp;مقفولة ورجعت من الـ <span style=\"color: rgb(250, 204, 21);\"><span style=\"color: rgb(56, 189, 248);\">IU</span></span> خلال <span style=\"color: rgb(56, 189, 248);\">5&nbsp;</span>أيام&nbsp;وعنده نفس المشكلة",
                "decKey": "MCU_CLOSED_WITHIN_5DAYS"
            },
            {
                "type": "case",
                "text": "&nbsp;مقفولة ورجعت من ال <span style=\"color: rgb(56, 189, 248);\">IU</span> بعد أكثر من <span style=\"color: rgb(56, 189, 248);\">5</span> أيام&nbsp;",
                "decKey": "MCU_CLOSED_OVER_5DAYS"
            }
        ],
        "INSTALLATION_OPS": [
            {
                "type": "case",
                "text": "لو تابع للقاهرة، الجيزة أو الإسكندرية",
                "decKey": "INSTALL_CAIRO"
            },
            {
                "type": "case",
                "text": "لو تابع للمحافظات الأخرى&nbsp;",
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
                "text": "اتصعدت مره وحده لل IU",
                "target": "SEC_1794393999106"
            },
            {
                "type": "case",
                "text": "اتصعدت اكتر من مره لل IU",
                "target": "SEC_1794393974458"
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
                "text": "متصعدة مرة وحدة",
                "target": "SEC_1794510173497"
            },
            {
                "type": "case",
                "text": "متصعدة اكتر من مره",
                "target": "SEC_1794510156397"
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
                "text": "عنده نفس المشكلة الفيزيكال",
                "target": "SEC_1794346451785"
            },
            {
                "type": "case",
                "text": "<span style=\"font-size: 14px;\">عنده م<span style=\"font-size: 16px;\">شكلة تانية فيزيكال</span></span><span style=\"font-size: 16px;\"></span>",
                "target": "SEC_1794346437634"
            },
            {
                "type": "case",
                "text": "عنده مشكلة تانية لوجيكال",
                "target": "SEC_1794481536956"
            }
        ],
        "POOL_1794337383186": [],
        "SEC_1794339390400": [],
        "SLS": [],
        "SEC_1794346437634": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مشكلتة BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b></div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "لو احتجنا نصعد<div><span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">هنعمل TTS Case </span>&nbsp;ونحط فيه الخطوات.</div>"
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "6",
                "text": "هنعمل SR حل المشكله القديمه&nbsp;"
            },
            {
                "type": "step",
                "num": "7",
                "text": "هنعمل SR Case Need to be Escalated للمشكلة الجديده"
            },
            {
                "type": "step",
                "num": "8",
                "text": "<div>لو عدت ٢٤ ساعه من وقت التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794346451785": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف الابديت الموجود بيقول نعمل ايه"
            },
            {
                "type": "step",
                "num": "2",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "3",
                "text": "لو مشكلتة BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b></div>"
            },
            {
                "type": "step",
                "num": "4",
                "text": "لو احتجنا نصعد<div><span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">هنعمل TTS Case</span>  ونحط فيه الخطوات.</div>"
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "6",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "7",
                "text": "هنعمل SR ReEscalate للمشكله نفسها."
            },
            {
                "type": "step",
                "num": "8",
                "text": "<div>لو عدت ٢٤ ساعه من وقت التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
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
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
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
                "text": "هنعمل IR Delay ونابدت بيه جوه الشكوه."
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل IR Acceleration ونابدت جوه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR Follow After Sla عالمشكلة اللي في TTS."
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "POOL_1794366041775": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مشكلتة BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b></div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "لو احتجنا نصعد هنابدت بالخطوات عالشكوه ونرفعها لل <span style=\"padding: 1px 4px; border-radius: 3px;\"></span><span style=\"padding: 1px 4px; border-radius: 3px;\"></span><span style=\"color: rgb(250, 204, 21);\"><span style=\"padding: 1px 4px; border-radius: 3px;\"><b>IU</b></span></span>"
            },
            {
                "type": "step",
                "num": "4",
                "text": "وهنعمل SR Manual TS Steps"
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعمل SR ReEscalate للشكوه الموجوده في TTS."
            },
            {
                "type": "step",
                "num": "6",
                "text": "هنعمل <span style=\"padding: 1px 4px; border-radius: 3px;\"><font color=\"#000000\"><span style=\"background-color: rgb(254, 240, 138);\">IR Acceleration</span></font> ونابدت بيه جوه الشكوه لو</span>مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "7",
                "text": "<div>لو عدت ٢٤ ساعه من وقت التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794390971766": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مشكلتة BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b></div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "لو احتجنا نصعد هنابدت بالخطوات عالشكوه ونرفعها لل <span style=\"padding: 1px 4px; border-radius: 3px;\"></span><span style=\"padding: 1px 4px; border-radius: 3px;\"></span><span style=\"color: rgb(250, 204, 21);\"><span style=\"padding: 1px 4px; border-radius: 3px;\"><b>IU</b></span></span>"
            },
            {
                "type": "step",
                "num": "4",
                "text": "وهنعمل SR Manual TS Steps"
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعمل SR ReEscalate للشكوه الموجوده في TTS."
            },
            {
                "type": "step",
                "num": "6",
                "text": "هنعمل <span style=\"padding: 1px 4px; border-radius: 3px;\"><font color=\"#000000\"><span style=\"background-color: rgb(254, 240, 138);\">IR Acceleration</span></font> ونابدت بيه جوه الشكوه لو</span>مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "7",
                "text": "<div>لو عدت ٢٤ ساعه من وقت التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794393974458": [
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة ولسه في خلال SLA من وقت اخر تصعيد",
                "target": "SEC_1794394456271"
            },
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة وعدا ال SLA من وقت اخر تصعيد",
                "target": "SEC_1794394515987"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال تانية ولسه في خلال SLA من وقت اخر تصعيد",
                "target": "SEC_1794395810049"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال تانية وعدا ال SLA من وقت اخر تصعيد",
                "target": "SEC_1794396180763"
            }
        ],
        "SEC_1794393999106": [
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة خلال SLA",
                "target": "SEC_1794394093045"
            },
            {
                "type": "case",
                "text": "بيتابع نفس المشكلة وعدا SLA",
                "target": "SEC_1794394110355"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال تانية خلال SLA",
                "target": "SEC_1794395215315"
            },
            {
                "type": "case",
                "text": "عنده مشكلة فيزيكال تانية وعدا SLA",
                "target": "SEC_1794395399583"
            }
        ],
        "SEC_1794394093045": [
            {
                "type": "step",
                "num": "١",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعرض تعويض ٠١٥ لو متعرضش والشكوه physical instability او BLQ.&nbsp;<div>او Voice down وعليها ابديت بان عنده مشكله في النت ٣ جيجا لمده يومين</div>"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل SR Follow up Within sla"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794394110355": [
            {
                "type": "step",
                "num": "١",
                "text": "هنعمل IR Acceleration ونابدت بيه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Delay<div>ونابدت بيه جوه عالشكوه.</div>"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            },
            {
                "type": "step",
                "num": "٤",
                "text": "هنعمل SR Follow After Sla.&nbsp;"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 24 ساعه لو حياة كريمة برضو"
            }
        ],
        "SEC_1794394456271": [
            {
                "type": "step",
                "num": "١",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "<div>لو عدت ٢٤ ساعه من وقت اول تصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل SR Follow Up After ReEsclation Within Sla"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794394515987": [
            {
                "type": "step",
                "num": "١",
                "text": "هنعمل IR Acceleration ونابدت بيه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Delay<div>ونابدت بيه جوه عالشكوه.</div>"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            },
            {
                "type": "step",
                "num": "٤",
                "text": "هنعمل SR Follow Up After ReEsclation After SLA"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 24 ساعه لو حياة كريمة برضو"
            }
        ],
        "SEC_1794394629022": [],
        "SEC_1794395215315": [
            {
                "type": "step",
                "num": "١",
                "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل SR Follow Up&nbsp; Within. عالمشكله اللي في TTS."
            },
            {
                "type": "step",
                "num": "٤",
                "text": "<div>هنعرض تعويض ٠١٥ لو متعرضش&nbsp; والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها ابديت بان عنده مشكله في النت&nbsp; ٣ جيجا لمده يومين</div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794395399583": [
            {
                "type": "step",
                "num": "١",
                "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Delay ونابدت بيه جوه الشكوه."
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل IR Acceleration ونابدت جوه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٤",
                "text": "هنعمل SR Follow After Sla عالمشكلة اللي في TTS."
            },
            {
                "type": "step",
                "num": "٥",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 24 ساعه لو حياة كريمة برضو"
            }
        ],
        "SEC_1794395810049": [
            {
                "type": "step",
                "num": "١",
                "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Acceleration ونابدت بيه جوه الشكوه لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل SR Follow Up After ReEscalation Within SLA. عالمشكله اللي في TTS."
            },
            {
                "type": "step",
                "num": "٤",
                "text": "<div>لو عدت ٢٤ ساعه من وقت اول تصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 72 ساعه لو حياة كريمة"
            }
        ],
        "SEC_1794396180763": [
            {
                "type": "step",
                "num": "١",
                "text": "هنأبدت عالشكوه المشكلة الفيزيكال الجديدة."
            },
            {
                "type": "step",
                "num": "٢",
                "text": "هنعمل IR Delay ونابدت بيه جوه الشكوه."
            },
            {
                "type": "step",
                "num": "٣",
                "text": "هنعمل IR Acceleration ونابدت جوه عالشكوه&nbsp; لو مش حياة كريمة"
            },
            {
                "type": "step",
                "num": "٤",
                "text": "هنعمل SR Follow Up After ReEscalation After Sla عالمشكلة اللي في TTS."
            },
            {
                "type": "step",
                "num": "٥",
                "text": "هنعرض تعويض ٠١٥ حسب باقته لو مضفش قبل كده."
            },
            {
                "type": "note",
                "text": "ال Sla هتكون 24 ساعه وهتكون 24 ساعه لو حياة كريمة برضو"
            }
        ],
        "SEC_1794465582630": [],
        "SEC_1794465800265": [],
        "SEC_1794481536956": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو احتجنا نصعد<div><span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">هنعمل TTS Case</span> ونحط فيه الخطوات.</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR حل المشكله القديمه."
            },
            {
                "type": "step",
                "num": "5",
                "text": "هنعمل SR Case Need to be Escalated للمشكلة الجديده."
            },
            {
                "type": "note",
                "text": "ال SLA بتكون بتاعت المشكلة اللوجيكال"
            }
        ],
        "POOL_1794487315512": [
            {
                "type": "case",
                "text": "عنده نفس المشكلة",
                "target": "SEC_1794488549230"
            },
            {
                "type": "case",
                "text": "عنده مشكلة تانية",
                "target": "SEC_1794488549943"
            }
        ],
        "POOL_1794487341327": [
            {
                "type": "case",
                "text": "متصعدة مرة وحدة",
                "target": "SEC_1794510071622"
            },
            {
                "type": "case",
                "text": "متصعدة اكتر من مره",
                "target": "SEC_1794510070671"
            }
        ],
        "SEC_1794488549230": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف الابديت الموجود بيقول نعمل ايه.<div>---<br><div>هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div></div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو متحلتش واحتجنا نصعد <span style=\"background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); padding: 1px 4px; border-radius: 3px;\">هنعمل TTS Csae&nbsp;</span><div>ونحط فيها الخطوات</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "4",
                "text": "وهنعمل SR ReEscalate لنفس المشكلة."
            },
            {
                "type": "note",
                "text": "ال SLA بتكون نفسها بتاعت المشكلة."
            }
        ],
        "SEC_1794488549943": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو متحلتش واحتجنا نصعد <span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">هنعمل TTS Csae&nbsp;</span><div>ونحط فيها الخطوات</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR Case Need to be Escalated للمشكلة الجديده"
            },
            {
                "type": "note",
                "text": "<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">ال SLA بتكون بتاعت المشكلة الجديده.</span>"
            }
        ],
        "SEC_1794488560660": [],
        "SEC_1794489870945": [
            {
                "type": "case",
                "text": "عنده نفس المشكلة",
                "target": "SEC_1794489902543"
            },
            {
                "type": "case",
                "text": "عنده مشكلة تانية",
                "target": "SEC_1794489924825"
            }
        ],
        "SEC_1794489902543": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف الابديت الموجود بيقول نعمل ايه.<div>---<br><div>هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div></div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو متحلتش واحتجنا نصعد <span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">هنعمل TTS Csae&nbsp;</span><div>ونحط فيها الخطوات</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "4",
                "text": "وهنعمل SR ReEscalate لنفس المشكلة."
            },
            {
                "type": "note",
                "text": "ال SLA بتكون نفسها بتاعت المشكلة."
            }
        ],
        "SEC_1794489924825": [
            {
                "type": "step",
                "num": "1",
                "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو متحلتش واحتجنا نصعد <span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">هنعمل TTS Csae&nbsp;</span><div>ونحط فيها الخطوات</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنابدت بالخطوات ورقم tts case جوه الشكوه."
            },
            {
                "type": "step",
                "num": "4",
                "text": "هنعمل SR Case Need to be Escalated للمشكلة الجديده"
            },
            {
                "type": "note",
                "text": "<span style=\"color: rgb(248, 250, 252); font-weight: 400;\">ال SLA بتكون بتاعت المشكلة الجديده.</span>"
            }
        ],
        "SEC_1794509030623": [],
        "SEC_1794509045338": [],
        "SEC_1794509071041": [],
        "SEC_1794509073067": [],
        "SEC_1794509218094": [],
        "SEC_1794510070671": [
            {
                "type": "case",
                "text": "لسه في خلال ال SLA من اخر تصعيد",
                "target": "SEC_1794510431992"
            },
            {
                "type": "case",
                "text": "عدت ال SLA من اخر تصعيد",
                "target": "SEC_1794510456020"
            }
        ],
        "SEC_1794510071622": [
            {
                "type": "case",
                "text": "خلال ال SLA",
                "target": "SEC_1794510230395"
            },
            {
                "type": "case",
                "text": "عدت ال SLA",
                "target": "SEC_1794510231114"
            }
        ],
        "SEC_1794510156397": [
            {
                "type": "case",
                "text": "لسه في خلال ال SLA من اخر تصعيد",
                "target": "SEC_1794510543575"
            },
            {
                "type": "case",
                "text": "عدت ال SLA من اخر تصعيد",
                "target": "SEC_1794510730484"
            }
        ],
        "SEC_1794510173497": [
            {
                "type": "case",
                "text": "خلال ال SLA",
                "target": "SEC_1794510294511"
            },
            {
                "type": "case",
                "text": "عدت ال SLA",
                "target": "SEC_1794510337136"
            }
        ],
        "SEC_1794510230395": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنبلغه لسه الشكوه في القسم المختص ولسه في خلال المده.<div>وهنابدت عالشكوه انه بيتابع .</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up Within Sla"
            }
        ],
        "SEC_1794510231114": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنعمل IR Delay لل Pilot-Sls وهنابدت برقمها عالشكوه.&nbsp;<div>ونجدد المده.</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After Sla"
            }
        ],
        "SEC_1794510232141": [],
        "SEC_1794510294511": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنبلغه لسه الشكوه في القسم المختص ولسه في خلال المده.<div>وهنابدت عالشكوه انه بيتابع .</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up Within Sla"
            }
        ],
        "SEC_1794510337136": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنعمل IR Delay لل Noc وهنابدت برقمها عالشكوة.<div>ونجدد المده.</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After Sla"
            }
        ],
        "SEC_1794510431992": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنبلغه لسه الشكوه في القسم المختص ولسه في خلال المده.<div>وهنابدت عالشكوه انه بيتابع .</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After ReEsclation Within Sla"
            }
        ],
        "SEC_1794510456020": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنعمل IR Delay لل Pilot-Sls وهنابدت برقمها عالشكوه."
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After ReEsclation After Sla"
            }
        ],
        "SEC_1794510543575": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنبلغه لسه الشكوه في القسم المختص ولسه في خلال المده.<div>وهنابدت عالشكوه انه بيتابع .</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After ReEsclation Within Sla"
            }
        ],
        "SEC_1794510730484": [
            {
                "type": "step",
                "num": "1",
                "text": "اول حاجه هنشوف لو فية ابديت بيقول نعمل ايه.<div>لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;</div>"
            },
            {
                "type": "step",
                "num": "2",
                "text": "لو مفيش ابديت هنعمل IR Delay لل Noc وهنابدت برقمها عالشكوة.<div>ونجدد المده.</div>"
            },
            {
                "type": "step",
                "num": "3",
                "text": "هنعمل SR Follow Up After ReEsclation After Sla"
            }
        ],
        "SEC_1794514341143": []
    },
    "sectionTitles": {
        "ADVANCED": "<span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">ما هي حالة الشكوه (Status)</span></span></span>",
        "TIME_FRAME": "📋 الخطوات المطلوبة:",
        "MCU": "<span style=\"font-size: 16px;\"><span style=\"font-size: 16px;\"><span style=\"font-size: 16px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">حدد موقف الشكوه داخل MCU Call Center:</span></span></span></span></span>",
        "INSTALLATION_OPS": false,
        "CLOSING_AUTOMATION": "اختر حالة الغلق الخاصة:",
        "SLS_FOLLOWUP": "ما هو موقف العميل والمشكلة؟",
        "IU": "<span style=\"font-size: 14px;\"><span style=\"color: rgb(250, 204, 21);\">هنشوف الشكوة متصعدة كام مره لل IU&nbsp;</span></span>",
        "NOC": "<span style=\"font-size: 12px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">هنشوف الشكوة متصعدة كام مره لل Noc</span></span></span></span>",
        "ADV_OTHER": false,
        "CUSTOM_1794074541102": false,
        "FOLLOWUP": false,
        "POOL_1794337383186": "خطوات ومسارات القسم الجديد:",
        "SEC_1794339390400": "خطوات ومسارات الحالة الجديدة:",
        "SLS": "خطوات ومسارات CC-Second Level Support / Pilot-SLS:",
        "SEC_1794346437634": "📋 الخطوات المطلوبة:",
        "SEC_1794346451785": "📋 الخطوات المطلوبة:",
        "SEC_1794346471034": "خطوات ومسارات الحالة الجديدة:",
        "SEC_1794356595043": "📋 الخطوات المطلوبة:",
        "SEC_1794356613469": "📋 الخطوات المطلوبة:",
        "SEC_1794363456024": "📋 الخطوات المطلوبة:",
        "POOL_1794366041775": "📋 الخطوات المطلوبة:",
        "SEC_1794390971766": "📋 الخطوات المطلوبة:",
        "SEC_1794393974458": false,
        "SEC_1794393999106": false,
        "SEC_1794394093045": "📋 الخطوات المطلوبة:",
        "SEC_1794394110355": "📋 الخطوات المطلوبة:",
        "SEC_1794394456271": "📋 الخطوات المطلوبة:",
        "SEC_1794394515987": "📋 الخطوات المطلوبة:",
        "SEC_1794394629022": "📋 الخطوات المطلوبة:",
        "SEC_1794395215315": "📋 الخطوات المطلوبة:",
        "SEC_1794395399583": "📋 الخطوات المطلوبة:",
        "SEC_1794395810049": "📋 الخطوات المطلوبة:",
        "SEC_1794396180763": "📋 الخطوات المطلوبة:",
        "SEC_1794465582630": "📋 الخطوات المطلوبة:",
        "SEC_1794465800265": "📋 الخطوات المطلوبة:",
        "SEC_1794481536956": "📋 الخطوات المطلوبة:",
        "POOL_1794487315512": false,
        "POOL_1794487341327": "<span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">هنشوف الشكوة متصعدة كام مره لل Pilot -Sls</span></span>",
        "SEC_1794488549230": "📋 الخطوات المطلوبة:",
        "SEC_1794488549943": "📋 الخطوات المطلوبة:",
        "SEC_1794488560660": "📋 الخطوات المطلوبة:",
        "SEC_1794489870945": false,
        "SEC_1794489902543": "📋 الخطوات المطلوبة:",
        "SEC_1794489924825": "📋 الخطوات المطلوبة:",
        "SEC_1794509030623": "📋 الخطوات المطلوبة:",
        "SEC_1794509045338": "📋 الخطوات المطلوبة:",
        "SEC_1794509071041": "📋 الخطوات المطلوبة:",
        "SEC_1794509073067": "📋 الخطوات المطلوبة:",
        "SEC_1794509218094": "📋 الخطوات المطلوبة:",
        "SEC_1794510070671": "<span style=\"color: rgb(250, 204, 21);\"><span style=\"font-size: 14px;\">ال SLA : ساعة</span></span>",
        "SEC_1794510071622": "<span style=\"color: rgb(56, 189, 248);\"><span style=\"font-size: 14px;\"><span style=\"color: rgb(250, 204, 21);\">ال SLA : ساعة</span></span></span>",
        "SEC_1794510156397": false,
        "SEC_1794510173497": false,
        "SEC_1794510230395": "📋 الخطوات المطلوبة:",
        "SEC_1794510231114": "📋 الخطوات المطلوبة:",
        "SEC_1794510232141": "📋 الخطوات المطلوبة:",
        "SEC_1794510294511": "📋 الخطوات المطلوبة:",
        "SEC_1794510337136": "📋 الخطوات المطلوبة:",
        "SEC_1794510431992": "📋 الخطوات المطلوبة:",
        "SEC_1794510456020": "📋 الخطوات المطلوبة:",
        "SEC_1794510543575": "📋 الخطوات المطلوبة:",
        "SEC_1794510730484": "📋 الخطوات المطلوبة:",
        "SEC_1794514341143": "📋 الخطوات المطلوبة:"
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
                    "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "لو مشكلتة BLQ و Instability&nbsp;<div>لازم نرن <b>Clear view علي ٢٤ .</b>&nbsp;للتأكد من عدم حلها.</div>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "هنابدت الخطوات جوه الشكوه في TTS ونرفعها لل <span style=\"color: rgb(250, 204, 21);\"><b>IU</b></span>."
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "هنعمل SR ReEscalate للشكوه الموجوده في TTS."
                },
                {
                    "type": "step",
                    "num": "5",
                    "text": "هنعمل <span style=\"padding: 1px 4px; border-radius: 3px;\"><font color=\"#000000\"><span style=\"background-color: rgb(254, 240, 138);\">IR Acceleration</span></font>&nbsp;ونابدت بيه جوه الشكوه لو</span>مش حياة كريمة"
                },
                {
                    "type": "step",
                    "num": "6",
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
                    "text": "هنمشي خطوات المشكلة لو اتحلت هنابدت الشكوه انها اتحلت وهنعمل SR حل المشكلة.&nbsp;"
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
                    "text": "هنعمل <span style=\"padding: 1px 4px; background-color: rgb(254, 240, 138); color: rgb(0, 0, 0); border-radius: 3px;\">IR Rework</span> لو الشكوه القديمه رجعت من ال iu في خلال ٣٠ يوم .<div>لو مش حياة كريمه</div>"
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
                    "text": "هنمشي خطوات حل المشكلة لو اتحلت هنعمل SR حل المشكلة.&nbsp;"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "لو احتجنا نصعد هنصعد شكوه جديده بالخطوات الجديده."
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "🚫 ممنوع نهائياً نسخ خطوات الفحص القديمة لأنها غير مقبولة بعد 5 أيام."
                },
                {
                    "type": "step",
                    "num": "4",
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
                    "num": "1",
                    "text": "مدة حل المشكلة&nbsp; يومين عمل.<div>ولو عدا المده هنجددها.</div>"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "<div><div>لو عدت ٢٤ ساعه من وقت اول التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div></div>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "فتح <b>SR follow up within / after sla حسب الشكوه</b>"
                }
            ]
        },
        "INSTALL_OTHER": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "مدة حل المشكلة خمس ايام عمل&nbsp;<div>ولو عدا المده هنجددها</div>"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "<div>لو عدت ٢٤ ساعه من وقت اول التصعيد&nbsp;</div>هنعرض تعويض ٠١٥ حسب باقتة.<div>---------<br><div>&nbsp;لو خلال ٢٤ ساعه والشكوه physical instability او BLQ.&nbsp;</div><div>او Voice down وعليها بمشكله في النت ٣ جيجا لمده يومين</div></div>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "فتح <b>SR follow up within / after sla حسب الشكوه</b>"
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
            "items": []
        },
        "NOC_PASS": {
            "items": []
        },
        "IU_SAME_WITHIN": {
            "items": [
                {
                    "type": "step",
                    "num": "1",
                    "text": "<br>"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "<br>"
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
                    "text": "<br>"
                },
                {
                    "type": "step",
                    "num": "2",
                    "text": "<br>"
                },
                {
                    "type": "step",
                    "num": "3",
                    "text": "<br>"
                },
                {
                    "type": "step",
                    "num": "4",
                    "text": "<br>"
                },
                {
                    "type": "note",
                    "text": "<br>"
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
                    "text": "هنعمل SR Follow Up&nbsp; Within. عالمشكله اللي في TTS."
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