"use strict";

/* =========================================================
   STUDY - CLASS 10 LEARNING WEBSITE
   Works with the HTML structure provided:
   showSection()
   showSubject()
   showPapers()
   nextQuestion()
   startTimer()
   pauseTimer()
   resetTimer()
   ========================================================= */


/* =========================================================
   SUBJECT DATA
   ========================================================= */

const SUBJECT_DATA = {

    science: {
        name: "Science",
        description: "Physics, Chemistry and Biology",
        chapters: {
            "Chemical Reactions and Equations": {
                notes: [
                    "A chemical reaction is a process in which one or more substances change into new substances with different properties.",
                    "The substances that take part in a chemical reaction are called reactants and the substances formed are called products.",
                    "A chemical equation represents a chemical reaction using chemical formulae and symbols.",
                    "A balanced chemical equation has equal numbers of atoms of every element on both sides of the equation.",
                    "Combination reaction: two or more substances combine to form a single product.",
                    "Decomposition reaction: one compound breaks into two or more simpler substances.",
                    "Displacement reaction: a more reactive element displaces a less reactive element from its compound.",
                    "Double displacement reaction involves exchange of ions between two compounds.",
                    "Oxidation can involve addition of oxygen or loss of hydrogen/electrons.",
                    "Reduction can involve removal of oxygen or addition of hydrogen/electrons.",
                    "Corrosion is the gradual deterioration of metals due to environmental reactions.",
                    "Rancidity is oxidation of fats and oils that produces an unpleasant smell and taste."
                ],
                questions: [
                    ["What is a chemical reaction?", "A chemical reaction is a process in which reactants undergo chemical changes and form new substances called products. The products have different properties from the reactants."],
                    ["What is a balanced chemical equation?", "A chemical equation in which the number of atoms of each element is equal on both sides is called a balanced chemical equation. Balancing follows the law of conservation of mass."],
                    ["What is a redox reaction?", "A reaction in which oxidation and reduction take place simultaneously is called a redox reaction."],
                    ["What is corrosion?", "Corrosion is the gradual destruction of a metal due to chemical reactions with substances present in the environment. Rusting of iron is a common example."],
                    ["How can rancidity be prevented?", "Rancidity can be reduced by storing food in airtight containers, refrigeration, keeping food away from light and using suitable antioxidants."]
                ],
                formula: [
                    "2Mg + O2 -> 2MgO",
                    "Fe + CuSO4 -> FeSO4 + Cu",
                    "Zn + H2SO4 -> ZnSO4 + H2"
                ]
            },

            "Acids, Bases and Salts": {
                notes: [
                    "Acids generally produce hydrogen ions in aqueous solution.",
                    "Bases generally produce hydroxide ions in aqueous solution.",
                    "Indicators help identify whether a substance is acidic or basic.",
                    "The pH scale is used to measure the acidic or basic nature of a solution.",
                    "pH less than 7 indicates an acidic solution.",
                    "pH equal to 7 indicates a neutral solution.",
                    "pH greater than 7 indicates a basic solution.",
                    "Neutralisation is the reaction between an acid and a base to form salt and water.",
                    "Important compounds include baking soda, washing soda and plaster of Paris."
                ],
                questions: [
                    ["What is an acid?", "An acid is a substance that produces hydrogen ions in aqueous solution. Acids generally turn blue litmus red."],
                    ["What is a base?", "A base is a substance that produces hydroxide ions in aqueous solution. Bases generally turn red litmus blue."],
                    ["What is pH?", "pH is a measure of the acidic or basic character of a solution. Lower pH values indicate stronger acidity while higher values indicate greater basicity."],
                    ["What is neutralisation?", "Neutralisation is a reaction between an acid and a base in which salt and water are generally formed."],
                    ["Why is pH important in everyday life?", "pH is important in digestion, tooth decay, agriculture, soil treatment and many biological processes."]
                ],
                formula: [
                    "pH < 7 -> acidic",
                    "pH = 7 -> neutral",
                    "pH > 7 -> basic",
                    "HCl + NaOH -> NaCl + H2O"
                ]
            },

            "Metals and Non-metals": {
                notes: [
                    "Metals are generally lustrous, malleable, ductile and good conductors of heat and electricity.",
                    "Non-metals generally show opposite physical properties, though there are exceptions.",
                    "The reactivity series arranges metals according to their chemical reactivity.",
                    "Ionic compounds are formed by transfer of electrons between atoms.",
                    "Highly reactive metals are generally extracted by electrolysis.",
                    "Moderately reactive metals can be extracted by roasting/calcination followed by reduction.",
                    "Corrosion can be prevented by painting, oiling, greasing, galvanising and alloying."
                ],
                questions: [
                    ["What is the reactivity series?", "The reactivity series is an arrangement of metals in decreasing order of their chemical reactivity."],
                    ["Why are ionic compounds generally hard?", "Ionic compounds have strong electrostatic forces between oppositely charged ions, making them hard and giving them high melting points."],
                    ["What is an ore?", "An ore is a naturally occurring mineral from which a metal can be extracted economically."],
                    ["How is corrosion prevented?", "Corrosion can be reduced by painting, oiling, greasing, galvanising, electroplating and alloying."],
                    ["Why do metals conduct electricity?", "Metals contain mobile electrons that can move through the structure and carry electric charge."]
                ],
                formula: [
                    "More reactive metal can displace a less reactive metal from its salt solution.",
                    "Metals above carbon are generally extracted by suitable reduction/electrolytic methods."
                ]
            },

            "Carbon and Its Compounds": {
                notes: [
                    "Carbon forms a large number of compounds because of tetravalency and catenation.",
                    "Tetravalency means carbon can form four covalent bonds.",
                    "Catenation is the ability of carbon atoms to bond with one another.",
                    "Hydrocarbons contain only carbon and hydrogen.",
                    "Saturated hydrocarbons contain single bonds, while unsaturated hydrocarbons contain double or triple bonds.",
                    "A homologous series consists of compounds having the same functional group and similar chemical properties.",
                    "Soap is less effective in hard water because it forms scum with calcium and magnesium ions.",
                    "Detergents generally work better in hard water."
                ],
                questions: [
                    ["Why does carbon form a large number of compounds?", "Carbon has tetravalency and catenation. It can form four covalent bonds and can join with other carbon atoms to make chains, branches and rings."],
                    ["What is a homologous series?", "A homologous series is a family of organic compounds having the same functional group and similar chemical properties. Consecutive members differ by CH2."],
                    ["What is a saturated hydrocarbon?", "A saturated hydrocarbon contains only single bonds between carbon atoms."],
                    ["What is a functional group?", "A functional group is an atom or group of atoms in an organic compound that determines many of its characteristic chemical properties."],
                    ["Why are detergents better than soaps in hard water?", "Detergents generally do not form the insoluble scum produced by soap with calcium and magnesium ions, so they remain effective in hard water."]
                ],
                formula: [
                    "Alkanes: CnH2n+2",
                    "Alkenes: CnH2n",
                    "Alkynes: CnH2n-2"
                ]
            },

            "Life Processes": {
                notes: [
                    "Life processes are activities necessary for maintaining life.",
                    "Major life processes include nutrition, respiration, transportation and excretion.",
                    "Photosynthesis converts carbon dioxide and water into glucose in the presence of sunlight and chlorophyll.",
                    "Digestion breaks complex food into simpler substances that can be absorbed.",
                    "The heart pumps blood throughout the body.",
                    "The kidneys remove nitrogenous wastes from blood.",
                    "The nephron is the structural and functional unit of the kidney."
                ],
                questions: [
                    ["What are life processes?", "Life processes are basic processes necessary for maintenance and survival of living organisms. These include nutrition, respiration, transportation and excretion."],
                    ["Explain digestion in humans.", "Digestion begins in the mouth. Saliva starts starch digestion. The stomach provides an acidic medium and enzymes act on food. In the small intestine bile and digestive enzymes complete digestion and nutrients are absorbed."],
                    ["What is the function of the heart?", "The heart is a muscular organ that pumps blood throughout the body and maintains circulation."],
                    ["What is a nephron?", "A nephron is the structural and functional unit of the kidney. It filters blood, reabsorbs useful substances and helps form urine."],
                    ["What is respiration?", "Respiration is the process through which cells release energy from food. Aerobic respiration generally uses oxygen, while anaerobic respiration occurs without oxygen."]
                ],
                formula: [
                    "Photosynthesis: Carbon dioxide + Water -> Glucose + Oxygen",
                    "Aerobic respiration releases energy from food."
                ]
            },

            "Control and Coordination": {
                notes: [
                    "The nervous system coordinates responses to stimuli.",
                    "A neuron is the structural and functional unit of the nervous system.",
                    "Reflex action is a rapid automatic response to a stimulus.",
                    "The brain and spinal cord form the central nervous system.",
                    "Plant hormones regulate growth and responses.",
                    "Auxin, gibberellin, cytokinin, abscisic acid and ethylene are important plant hormones."
                ],
                questions: [
                    ["What is a neuron?", "A neuron is the structural and functional unit of the nervous system. It receives and transmits information."],
                    ["What is reflex action?", "Reflex action is a rapid and automatic response to a stimulus, generally involving a reflex arc."],
                    ["What is a reflex arc?", "A reflex arc is the pathway followed by nerve impulses during a reflex action."],
                    ["What are plant hormones?", "Plant hormones are chemical substances that regulate plant growth and responses."],
                    ["What is phototropism?", "Phototropism is the directional growth of a plant part in response to light."]
                ],
                formula: []
            },

            "How do Organisms Reproduce?": {
                notes: [
                    "Reproduction is essential for continuity of species.",
                    "Asexual reproduction generally involves one parent.",
                    "Sexual reproduction involves formation and fusion of gametes.",
                    "Binary fission, budding and vegetative propagation are forms of asexual reproduction.",
                    "Sexual reproduction produces genetic variation among offspring.",
                    "Pollination is transfer of pollen grains from anther to stigma.",
                    "Fertilisation is fusion of male and female gametes."
                ],
                questions: [
                    ["What is asexual reproduction?", "Asexual reproduction generally involves one parent and does not involve fusion of gametes."],
                    ["What is sexual reproduction?", "Sexual reproduction involves formation of gametes and their fusion during fertilisation."],
                    ["Why is reproduction important?", "Reproduction ensures continuity of species from one generation to the next."],
                    ["What is fertilisation?", "Fertilisation is the fusion of male and female gametes to form a zygote."],
                    ["What is vegetative propagation?", "It is a form of asexual reproduction in plants in which new plants develop from vegetative parts such as roots, stems or leaves."]
                ],
                formula: []
            },

            "Heredity": {
                notes: [
                    "Heredity is transmission of characteristics from parents to offspring.",
                    "Genes are units of heredity located on chromosomes.",
                    "DNA carries genetic information.",
                    "Mendel studied inheritance using pea plants.",
                    "Dominant traits express themselves in the presence of a dominant allele.",
                    "Recessive traits may remain hidden in a heterozygous condition.",
                    "Genotype refers to genetic constitution while phenotype refers to observable characteristics."
                ],
                questions: [
                    ["What is heredity?", "Heredity is the transmission of traits from parents to offspring through genetic material."],
                    ["What is a gene?", "A gene is a unit of heredity that carries information for a particular characteristic."],
                    ["What is the difference between genotype and phenotype?", "Genotype is the genetic constitution for a trait, while phenotype is the observable expression of that trait."],
                    ["What did Mendel discover?", "Mendel established important principles of inheritance through his experiments with pea plants."],
                    ["What is a dominant trait?", "A dominant trait is expressed even when only one copy of the corresponding dominant allele is present."]
                ],
                formula: []
            },

            "Light - Reflection and Refraction": {
                notes: [
                    "Reflection is the bouncing back of light from a surface.",
                    "The angle of incidence is equal to the angle of reflection.",
                    "Spherical mirrors are classified as concave and convex mirrors.",
                    "Refraction is the change in direction of light when it passes from one medium to another.",
                    "A convex lens generally converges parallel rays.",
                    "A concave lens generally diverges parallel rays.",
                    "Mirror and lens formulae are important for numerical problems."
                ],
                questions: [
                    ["What are the laws of reflection?", "The angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal lie in the same plane."],
                    ["What is refraction?", "Refraction is the change in direction of light when it passes from one transparent medium to another because its speed changes."],
                    ["What is the mirror formula?", "The mirror formula is 1/f = 1/v + 1/u."],
                    ["What is magnification for a mirror?", "Magnification is given by m = hi/ho = -v/u."],
                    ["What is power of a lens?", "Power of a lens is P = 1/f when focal length is measured in metres. The unit is dioptre."]
                ],
                formula: [
                    "1/f = 1/v + 1/u",
                    "m = hi/ho = -v/u",
                    "P = 1/f"
                ]
            },

            "Electricity": {
                notes: [
                    "Electric current is the rate of flow of electric charge.",
                    "Potential difference is the work done per unit charge.",
                    "Resistance is opposition to the flow of current.",
                    "Ohm's law states that V is directly proportional to I at constant temperature.",
                    "In series combination, the same current flows through all resistors.",
                    "In parallel combination, the potential difference across each branch is the same.",
                    "Electric power is the rate of electrical energy consumption."
                ],
                questions: [
                    ["What is electric current?", "Electric current is the rate of flow of electric charge through a conductor."],
                    ["State Ohm's law.", "At constant temperature, the potential difference across a conductor is directly proportional to the current flowing through it, so V = IR."],
                    ["What is resistance?", "Resistance is the opposition offered by a conductor to the flow of electric current."],
                    ["What is electric power?", "Electric power is the rate at which electrical energy is consumed or converted. P = VI."],
                    ["Difference between series and parallel combination?", "In series the same current flows through each resistor and total resistance is the sum. In parallel the voltage is the same across branches and reciprocal resistances are added."]
                ],
                formula: [
                    "V = IR",
                    "P = VI",
                    "P = I^2R",
                    "P = V^2/R",
                    "E = Pt",
                    "Series: R = R1 + R2 + R3"
                ]
            }
        }
    },


    /* =====================================================
       SOCIAL SCIENCE
       ===================================================== */

    sst: {
        name: "Social Science",
        description: "History, Geography, Civics and Economics",
        chapters: {

            "The Rise of Nationalism in Europe": {
                notes: [
                    "The French Revolution introduced ideas of liberty, equality and fraternity.",
                    "The concept of the nation was linked with common citizenship and political rights.",
                    "Napoleon introduced several administrative reforms but also imposed control over conquered territories.",
                    "Giuseppe Mazzini was an important Italian nationalist.",
                    "Germany was unified under the leadership of Prussia and Otto von Bismarck.",
                    "Italy was unified through the efforts of leaders including Mazzini, Cavour and Garibaldi."
                ],
                questions: [
                    ["How did the French Revolution influence nationalism?", "The French Revolution promoted liberty, equality and fraternity and linked sovereignty with citizens. These ideas encouraged nationalist movements across Europe."],
                    ["Who was Giuseppe Mazzini?", "Mazzini was an Italian revolutionary and nationalist who wanted Italy to become a united democratic republic."],
                    ["How was Germany unified?", "Germany was unified under Prussian leadership and Otto von Bismarck through a series of wars. The German Empire was proclaimed in 1871."],
                    ["Why was nationalism important in nineteenth-century Europe?", "Nationalism helped people develop a common political identity and contributed to the formation and consolidation of nation-states."]
                ]
            },

            "Nationalism in India": {
                notes: [
                    "Indian nationalism developed through resistance to colonial rule.",
                    "The First World War created economic and political difficulties in India.",
                    "Gandhi launched the Non-Cooperation Movement in 1920.",
                    "The Salt March became a major symbol of the Civil Disobedience Movement.",
                    "Different social groups joined the national movement for different reasons.",
                    "The sense of collective belonging was strengthened through symbols, folklore, images and reinterpretation of history."
                ],
                questions: [
                    ["Why was the Non-Cooperation Movement launched?", "It was launched against colonial rule and was influenced by events such as the Rowlatt Act, Jallianwala Bagh tragedy and the Khilafat issue."],
                    ["What was the Civil Disobedience Movement?", "It was a mass movement in which people deliberately broke selected colonial laws and participated in non-violent resistance."],
                    ["Why was the Salt March important?", "Salt was a universal necessity, so challenging the salt law became a powerful symbol of resistance against colonial rule."],
                    ["Why was nationalism spread through symbols and images?", "Symbols and images helped create a shared sense of identity and encouraged people to imagine themselves as part of one nation."]
                ]
            },

            "The Making of a Global World": {
                notes: [
                    "Global connections developed through trade, migration, labour and movement of ideas.",
                    "Nineteenth-century globalisation involved trade expansion and large-scale migration.",
                    "Indentured labour was used in plantations, mines and other workplaces.",
                    "The First World War disrupted global economic relations.",
                    "The Great Depression caused severe decline in production, trade and employment."
                ],
                questions: [
                    ["What is globalisation?", "Globalisation refers to increasing connections among different parts of the world through trade, migration, investment, technology and movement of ideas."],
                    ["What was indentured labour?", "Indentured labour involved workers working under contracts for a specified period and conditions. Many Indians migrated under such arrangements."],
                    ["What was the Great Depression?", "The Great Depression was a severe global economic crisis beginning in 1929 that reduced production, employment, trade and incomes."],
                    ["How did the First World War affect the global economy?", "The war disrupted production and trade, increased government debt and changed patterns of international economic activity."]
                ]
            },

            "The Age of Industrialisation": {
                notes: [
                    "Industrialisation changed production systems and labour patterns.",
                    "Proto-industrialisation developed before factories became widespread.",
                    "Merchants supplied raw materials to rural households.",
                    "Factories brought machines and workers together.",
                    "Hand labour continued where skilled work and flexible production were useful."
                ],
                questions: [
                    ["What was proto-industrialisation?", "It was a system of production for international markets before widespread factory development, often using rural household labour."],
                    ["Why did industrialists continue using hand labour?", "Hand labour could be cheaper and more flexible and was useful for specialised products and changing market demands."],
                    ["What was the factory system?", "The factory system concentrated workers and machines in a central workplace and enabled greater control over production."],
                    ["How did industrialisation affect workers?", "Industrialisation created new employment but also involved long working hours, uncertain employment and difficult working conditions for many workers."]
                ]
            },

            "Print Culture and the Modern World": {
                notes: [
                    "Printing technology transformed the circulation of information.",
                    "Johann Gutenberg developed a printing press using movable metal type in Europe.",
                    "Print helped religious ideas spread during the Reformation.",
                    "Newspapers and books contributed to public discussion.",
                    "Print culture also supported social reform and political debate."
                ],
                questions: [
                    ["Who developed the printing press in Europe?", "Johann Gutenberg developed an important movable-type printing press in Europe in the fifteenth century."],
                    ["How did print influence the Reformation?", "Printed texts spread reformist religious ideas quickly and encouraged wider debate."],
                    ["How did print affect public opinion?", "Newspapers, pamphlets, books and journals made information more accessible and encouraged public debate."],
                    ["Why was print important for reformers?", "Print allowed reformers to reach large audiences and communicate ideas beyond local communities."]
                ]
            },

            "Resources and Development": {
                notes: [
                    "Resources are things that have utility and satisfy human needs.",
                    "Resources may be natural, human-made or human resources.",
                    "Resource planning is necessary because resources are unevenly distributed and limited.",
                    "Land degradation can be caused by deforestation, overgrazing, mining, over-irrigation and industrial activities.",
                    "Sustainable development requires careful and balanced use of resources."
                ],
                questions: [
                    ["What is a resource?", "Anything that has utility, is technologically accessible, economically feasible and culturally acceptable can be considered a resource."],
                    ["Why is resource planning important?", "Resource planning helps identify resources, develop technology and institutions and use resources carefully for sustainable development."],
                    ["What is land degradation?", "Land degradation is the decline in quality and productivity of land due to processes such as deforestation, overgrazing and mining."],
                    ["What is sustainable development?", "Sustainable development means meeting present needs while protecting resources and the environment for future generations."]
                ]
            },

            "Forest and Wildlife Resources": {
                notes: [
                    "Biodiversity refers to the variety of living organisms.",
                    "Forests provide habitat and maintain ecological balance.",
                    "Human activities have contributed to depletion of forests and wildlife.",
                    "Protected areas help conserve biodiversity.",
                    "Local communities can play an important role in conservation."
                ],
                questions: [
                    ["What is biodiversity?", "Biodiversity is the variety of living organisms found in an area, including diversity within species, between species and among ecosystems."],
                    ["Why are forests important?", "Forests provide habitats, help maintain ecological balance, protect soil and provide useful products."],
                    ["Why is wildlife conservation necessary?", "Wildlife conservation protects species, habitats and ecological balance from excessive exploitation."],
                    ["What is conservation?", "Conservation is careful protection and management of natural resources for present and future generations."]
                ]
            },

            "Water Resources": {
                notes: [
                    "Freshwater is a limited and unevenly distributed resource.",
                    "Multipurpose river projects provide irrigation, electricity, flood control and other benefits.",
                    "Large dams can also create social and environmental concerns.",
                    "Rainwater harvesting helps conserve water and recharge groundwater.",
                    "Water conservation is necessary for sustainable development."
                ],
                questions: [
                    ["Why are multipurpose river projects constructed?", "They are constructed for irrigation, hydroelectric power, flood control, water supply, navigation and other purposes."],
                    ["What is rainwater harvesting?", "It is the collection and storage of rainwater for future use or groundwater recharge."],
                    ["Why is water conservation important?", "Freshwater is limited while demand is increasing due to agriculture, industries, cities and population growth."],
                    ["What is groundwater recharge?", "It is the process of allowing water to enter the ground and replenish underground water reserves."]
                ]
            },

            "Agriculture": {
                notes: [
                    "Agriculture is an important economic activity in India.",
                    "Subsistence farming mainly meets the requirements of the farmer's family.",
                    "Commercial farming is carried out largely for the market.",
                    "Rabi crops are mainly sown in winter.",
                    "Kharif crops are mainly sown with the monsoon.",
                    "Rice, wheat, millets, pulses, cotton and sugarcane are important crops."
                ],
                questions: [
                    ["What is subsistence farming?", "Subsistence farming is mainly carried out to meet the needs of the farmer and family."],
                    ["Differentiate between Rabi and Kharif crops.", "Rabi crops are generally sown in winter and harvested in spring. Kharif crops are generally sown with the monsoon and harvested after the rainy season."],
                    ["Why is agriculture important to India?", "Agriculture supplies food, raw materials, employment and supports several industries."],
                    ["What are millets?", "Millets are coarse grains such as jowar, bajra and ragi that are valued for their nutritional qualities and ability to grow in comparatively dry conditions."]
                ]
            },

            "Minerals and Energy Resources": {
                notes: [
                    "Minerals are naturally occurring substances with definite properties.",
                    "Minerals may be metallic or non-metallic.",
                    "Conventional energy sources include coal, petroleum and natural gas.",
                    "Non-conventional sources include solar, wind, tidal and geothermal energy.",
                    "Energy conservation is important because many conventional sources are finite."
                ],
                questions: [
                    ["What are minerals?", "Minerals are naturally occurring substances with definite physical and chemical properties."],
                    ["Differentiate between conventional and non-conventional energy sources.", "Conventional sources include coal and petroleum that have been used for a long time. Non-conventional sources include solar, wind, tidal and geothermal energy."],
                    ["Why is coal important?", "Coal is an important source of energy for electricity generation and industrial activities."],
                    ["Why are renewable sources important?", "Renewable sources are naturally replenished and can help reduce dependence on finite fossil fuels."]
                ]
            },

            "Manufacturing Industries": {
                notes: [
                    "Manufacturing converts raw materials into useful finished products.",
                    "Manufacturing adds value to raw materials.",
                    "Agro-based industries use agricultural products as raw materials.",
                    "Manufacturing creates employment and supports other economic activities.",
                    "Industrial pollution can affect air, water and land."
                ],
                questions: [
                    ["Why is manufacturing important?", "Manufacturing adds value to raw materials, creates employment, supports agriculture and promotes trade."],
                    ["What is industrial pollution?", "Industrial pollution is the release of harmful substances into air, water or land by industrial activities."],
                    ["What are agro-based industries?", "Agro-based industries use agricultural products as raw materials, such as cotton textile and sugar industries."],
                    ["How can industrial pollution be reduced?", "Pollution can be reduced through cleaner technology, treatment of wastes and proper pollution-control systems."]
                ]
            },

            "Lifelines of National Economy": {
                notes: [
                    "Transport and communication connect different regions.",
                    "Roadways provide door-to-door service and are useful for short distances.",
                    "Railways are important for large-scale movement of passengers and goods.",
                    "Ports connect inland markets with international trade.",
                    "Communication helps transfer information quickly."
                ],
                questions: [
                    ["Why are transport and communication called lifelines?", "They connect regions and facilitate movement of people, goods, information and services."],
                    ["What are the advantages of roadways?", "Roadways offer door-to-door service and are useful for short distances and perishable goods."],
                    ["Why are ports important?", "Ports connect inland transport systems with sea routes and support international trade."],
                    ["Why is communication important?", "Communication enables rapid transfer of information and strengthens economic and social connections."]
                ]
            },

            "Power Sharing": {
                notes: [
                    "Power sharing means distribution of power among different groups and institutions.",
                    "It reduces conflict and supports political stability.",
                    "Belgium is an example of accommodation through power sharing.",
                    "Majoritarianism can create conflict by ignoring minority interests.",
                    "Power sharing is a basic principle of democratic government."
                ],
                questions: [
                    ["What is power sharing?", "Power sharing is the distribution of power among organs of government, levels of government, social groups and political parties."],
                    ["Why is power sharing desirable?", "It reduces the possibility of conflict and improves political stability while strengthening democracy."],
                    ["What is majoritarianism?", "Majoritarianism is the belief that the majority community should rule without properly respecting minority interests."],
                    ["What are the forms of power sharing?", "Power can be shared among organs, levels and communities of government and among political parties or pressure groups."]
                ]
            },

            "Federalism": {
                notes: [
                    "Federalism divides power between different levels of government.",
                    "India has Union, State and local levels of government.",
                    "The Constitution divides powers through the Union, State and Concurrent Lists.",
                    "Decentralisation gives power to local government.",
                    "Federalism encourages participation and accommodates diversity."
                ],
                questions: [
                    ["What is federalism?", "Federalism is a system in which power is constitutionally divided between central and constituent governments."],
                    ["What are the three lists?", "The Union List contains national subjects, the State List contains state subjects and the Concurrent List contains subjects on which both can legislate."],
                    ["What is decentralisation?", "Decentralisation means transferring powers from higher levels of government to lower local levels."],
                    ["Why is federalism important in India?", "It helps manage India's geographical, linguistic and cultural diversity by distributing power among levels of government."]
                ]
            },

            "Gender, Religion and Caste": {
                notes: [
                    "Gender division is based on social expectations about roles of men and women.",
                    "Communalism uses religion to create political divisions.",
                    "Caste inequalities have historically affected social and economic opportunities.",
                    "Democracy provides opportunities to raise issues of social inequality.",
                    "Equal treatment and representation are important democratic values."
                ],
                questions: [
                    ["What is gender division?", "Gender division refers to social differences and unequal roles assigned on the basis of gender."],
                    ["What is communalism?", "Communalism is the use of religious differences for political purposes, often by presenting one community against another."],
                    ["What is caste inequality?", "Caste inequality means unequal social status and opportunities associated with caste."],
                    ["Why should gender equality be promoted?", "Gender equality improves fairness and ensures that people have equal access to education, employment and political participation."]
                ]
            },

            "Political Parties": {
                notes: [
                    "A political party is an organised group that seeks political power through elections.",
                    "Political parties contest elections and offer policies and programmes.",
                    "They form governments and act as opposition.",
                    "Parties shape public opinion and connect citizens with government.",
                    "A coalition government is formed by two or more parties."
                ],
                questions: [
                    ["What is a political party?", "A political party is an organised group of people that seeks to gain political power through elections."],
                    ["What are the functions of political parties?", "They contest elections, formulate policies, form governments, act as opposition, shape public opinion and connect citizens with government."],
                    ["What is a coalition government?", "It is a government formed when two or more political parties join together, usually when no single party has a clear majority."],
                    ["Why are political parties necessary?", "They organise political participation, present alternatives to voters and make democratic government possible on a large scale."]
                ]
            },

            "Outcomes of Democracy": {
                notes: [
                    "Democracy provides accountable and responsive government.",
                    "Democratic decisions involve consultation and public participation.",
                    "Democracy provides political equality.",
                    "Economic inequalities may continue despite democratic institutions.",
                    "Democracy can accommodate social diversity."
                ],
                questions: [
                    ["What is an accountable government?", "An accountable government is answerable to citizens for its decisions and actions."],
                    ["Why is democracy legitimate?", "Democracy is based on citizen participation and consent and governments are chosen through established procedures."],
                    ["Does democracy guarantee economic equality?", "No. Political equality can exist alongside economic inequality."],
                    ["How does democracy accommodate social diversity?", "It allows different social groups to express their interests and participate through democratic institutions."]
                ]
            },

            "Challenges to Democracy": {
                notes: [
                    "A foundational challenge involves establishing democratic institutions.",
                    "An expansion challenge involves extending democracy to all groups and regions.",
                    "A deepening challenge involves making democratic institutions stronger and more accountable.",
                    "Democracy requires continuous participation and institutional improvement."
                ],
                questions: [
                    ["What is a foundational challenge?", "It is the challenge faced by countries trying to establish democratic institutions after non-democratic rule."],
                    ["What is an expansion challenge?", "It involves extending democratic participation and principles to all regions, groups and institutions."],
                    ["What is a deepening challenge?", "It involves strengthening institutions, accountability, transparency and citizen participation."],
                    ["Why does democracy need improvement?", "Democratic institutions must continuously respond to new social demands and improve accountability and participation."]
                ]
            },

            "Development": {
                notes: [
                    "Different people may have different development goals.",
                    "Income is important but is not the only measure of development.",
                    "Health and education are important indicators.",
                    "Per capita income is used to compare average income.",
                    "Sustainable development protects resources for the future."
                ],
                questions: [
                    ["What is per capita income?", "Per capita income is average income per person and is calculated by dividing total income by total population."],
                    ["Why is income not the only measure of development?", "People also need health, education, equality, security, freedom and a clean environment."],
                    ["What is sustainable development?", "It means meeting present needs while protecting resources and the environment for future generations."],
                    ["Why can development goals differ?", "Different people have different needs and circumstances, so what counts as development for one person may differ for another."]
                ]
            },

            "Sectors of the Indian Economy": {
                notes: [
                    "The primary sector uses natural resources directly.",
                    "The secondary sector converts raw materials into manufactured goods.",
                    "The tertiary sector provides services.",
                    "Organised sector establishments generally follow government rules.",
                    "Public sector ownership is mainly with government while private sector ownership is mainly with private individuals or organisations."
                ],
                questions: [
                    ["What is the primary sector?", "It directly uses natural resources, such as agriculture, fishing and forestry."],
                    ["What is the secondary sector?", "It converts raw materials into manufactured goods."],
                    ["What is the tertiary sector?", "It provides services such as transport, banking, education and healthcare."],
                    ["Differentiate public and private sectors.", "The public sector is mainly owned and controlled by government, while the private sector is mainly owned and controlled by private individuals or organisations."]
                ]
            },

            "Money and Credit": {
                notes: [
                    "Money acts as a medium of exchange.",
                    "Money removes the problem of double coincidence of wants.",
                    "Banks accept deposits and provide loans.",
                    "Collateral is an asset offered as security for a loan.",
                    "Formal credit comes from regulated institutions.",
                    "Informal credit may come from moneylenders, traders, employers or relatives."
                ],
                questions: [
                    ["Why is money used as a medium of exchange?", "Money removes the need for double coincidence of wants and makes buying and selling easier."],
                    ["What is collateral?", "Collateral is an asset offered as security for a loan."],
                    ["Differentiate formal and informal credit.", "Formal credit comes from regulated institutions such as banks, while informal credit comes from sources such as moneylenders and relatives."],
                    ["Why are banks important?", "Banks accept deposits, provide credit and facilitate payments and financial transactions."]
                ]
            },

            "Globalisation and the Indian Economy": {
                notes: [
                    "Globalisation connects producers and consumers across countries.",
                    "Multinational corporations operate in more than one country.",
                    "Liberalisation reduced several restrictions on trade and investment.",
                    "Technology has accelerated global economic integration.",
                    "Globalisation has created opportunities as well as increased competition."
                ],
                questions: [
                    ["What is globalisation?", "Globalisation is increasing integration of production and markets across countries through trade, investment, technology and multinational companies."],
                    ["What are multinational corporations?", "They are companies that own or control production or services in more than one country."],
                    ["What is liberalisation?", "Liberalisation means reducing certain restrictions on trade and investment."],
                    ["What has been one effect of globalisation on Indian markets?", "Indian producers have gained access to larger markets and greater competition, while some smaller producers have faced challenges from competition."]
                ]
            },

            "Consumer Rights": {
                notes: [
                    "Consumers may face defective goods, unsafe products, misleading information and unfair trade practices.",
                    "Consumer rights protect buyers and give them legal remedies.",
                    "The right to information helps consumers make informed choices.",
                    "Quality marks can provide information about standards.",
                    "Consumer disputes can be taken to appropriate consumer-protection mechanisms."
                ],
                questions: [
                    ["Why are consumer rights important?", "They protect consumers from defective goods, unsafe products, misleading information and unfair trade practices."],
                    ["What is the right to information?", "It is the right of consumers to know important details about products and services before purchase."],
                    ["What is consumer redressal?", "Consumer redressal means obtaining a remedy when a consumer suffers due to defective goods, deficient services or unfair practices."],
                    ["Why should consumers be aware?", "Consumer awareness helps buyers compare products, understand terms and protect themselves from unfair practices."]
                ]
            }
        }
    },


    /* =====================================================
       MATHEMATICS
       ===================================================== */

    maths: {
        name: "Mathematics",
        description: "Class 10 Mathematics chapters, formulas and practice",
        chapters: {

            "Real Numbers": {
                notes: [
                    "Euclid's division lemma states that a = bq + r, where 0 <= r < b.",
                    "Euclid's division algorithm is used to find the HCF of two positive integers.",
                    "The Fundamental Theorem of Arithmetic states that every composite number has a unique prime factorisation apart from order.",
                    "A rational number has a terminating decimal expansion when, in lowest form, the denominator has only prime factors 2 and/or 5."
                ],
                questions: [
                    ["State Euclid's division lemma.", "For positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 <= r < b."],
                    ["How is HCF found using Euclid's algorithm?", "Divide the larger number by the smaller number, then divide the previous divisor by the remainder. Continue until the remainder becomes zero. The last non-zero remainder is the HCF."],
                    ["State the Fundamental Theorem of Arithmetic.", "Every composite number can be expressed as a product of primes and this factorisation is unique apart from order."],
                    ["When does a rational number terminate?", "After reducing the fraction to lowest terms, the denominator must have only 2 and/or 5 as prime factors."]
                ],
                formula: [
                    "a = bq + r",
                    "0 <= r < b",
                    "HCF x LCM = product of two positive integers"
                ]
            },

            "Polynomials": {
                notes: [
                    "A polynomial is an algebraic expression in which powers of the variable are non-negative integers.",
                    "A zero of a polynomial p(x) is a value of x for which p(x) = 0.",
                    "The number of zeroes can be related to the points at which the graph meets the x-axis.",
                    "For ax^2 + bx + c, sum of zeroes = -b/a and product = c/a."
                ],
                questions: [
                    ["What is a polynomial?", "A polynomial is an algebraic expression in which the powers of the variable are non-negative integers."],
                    ["What is a zero of a polynomial?", "A zero is a value of x for which p(x) = 0."],
                    ["What is the relation between zeroes and coefficients of a quadratic polynomial?", "For ax^2 + bx + c, if alpha and beta are zeroes, alpha + beta = -b/a and alpha beta = c/a."],
                    ["What does the graph of a polynomial show?", "The zeroes correspond to the x-coordinates where the graph meets or touches the x-axis."]
                ],
                formula: [
                    "Sum of zeroes = -b/a",
                    "Product of zeroes = c/a",
                    "p(x) = g(x)q(x) + r(x)"
                ]
            },

            "Pair of Linear Equations in Two Variables": {
                notes: [
                    "A pair of linear equations has two equations involving the same two variables.",
                    "The graphical representation consists of two straight lines.",
                    "Intersecting lines have one solution.",
                    "Parallel distinct lines have no solution.",
                    "Coincident lines have infinitely many solutions."
                ],
                questions: [
                    ["What is a pair of linear equations?", "It consists of two linear equations involving the same two variables."],
                    ["When does a pair have a unique solution?", "When a1/a2 is not equal to b1/b2, the equations have a unique solution."],
                    ["When is there no solution?", "When a1/a2 = b1/b2 but is not equal to c1/c2, the lines are parallel and there is no solution."],
                    ["When are there infinitely many solutions?", "When a1/a2 = b1/b2 = c1/c2, the equations represent the same line."]
                ],
                formula: [
                    "a1/a2 != b1/b2 -> unique solution",
                    "a1/a2 = b1/b2 != c1/c2 -> no solution",
                    "a1/a2 = b1/b2 = c1/c2 -> infinitely many solutions"
                ]
            },

            "Quadratic Equations": {
                notes: [
                    "A quadratic equation is of the form ax^2 + bx + c = 0, where a is not zero.",
                    "Quadratic equations can be solved by factorisation, completing the square or the quadratic formula.",
                    "The discriminant D = b^2 - 4ac determines the nature of roots.",
                    "D > 0 gives two distinct real roots.",
                    "D = 0 gives equal real roots.",
                    "D < 0 gives no real roots."
                ],
                questions: [
                    ["What is a quadratic equation?", "It is an equation of the form ax^2 + bx + c = 0, where a is not zero."],
                    ["What is the quadratic formula?", "x = (-b +/- sqrt(b^2 - 4ac)) / 2a."],
                    ["What is the discriminant?", "The discriminant is D = b^2 - 4ac and helps determine the nature of roots."],
                    ["What happens when D = 0?", "The quadratic equation has two equal real roots."]
                ],
                formula: [
                    "ax^2 + bx + c = 0",
                    "x = (-b +/- sqrt(b^2 - 4ac)) / 2a",
                    "D = b^2 - 4ac"
                ]
            },

            "Arithmetic Progressions": {
                notes: [
                    "An arithmetic progression is a sequence in which the difference between consecutive terms is constant.",
                    "The constant difference is called the common difference d.",
                    "The nth term can be found using an = a + (n - 1)d.",
                    "The sum of the first n terms can be calculated using Sn = n/2[2a + (n - 1)d]."
                ],
                questions: [
                    ["What is an arithmetic progression?", "An AP is a sequence in which the difference between consecutive terms is constant."],
                    ["What is the nth term of an AP?", "an = a + (n - 1)d."],
                    ["What is the sum of n terms?", "Sn = n/2[2a + (n - 1)d]."],
                    ["What is common difference?", "It is the difference between two consecutive terms of the AP."]
                ],
                formula: [
                    "an = a + (n - 1)d",
                    "Sn = n/2 [2a + (n - 1)d]",
                    "Sn = n/2 (a + l)"
                ]
            },

            "Triangles": {
                notes: [
                    "Similar triangles have equal corresponding angles and proportional corresponding sides.",
                    "The Basic Proportionality Theorem relates proportional division of two sides by a line parallel to the third side.",
                    "Similarity criteria include AA, SSS and SAS.",
                    "The Pythagorean theorem relates sides of a right triangle."
                ],
                questions: [
                    ["What are similar triangles?", "Similar triangles have equal corresponding angles and proportional corresponding sides."],
                    ["State the Basic Proportionality Theorem.", "A line parallel to one side of a triangle divides the other two sides proportionally."],
                    ["What are the criteria for similarity?", "The important criteria are AA, SSS and SAS."],
                    ["State Pythagoras theorem.", "In a right triangle, square of the hypotenuse equals the sum of squares of the other two sides."]
                ],
                formula: [
                    "Basic Proportionality Theorem",
                    "Hypotenuse^2 = Base^2 + Perpendicular^2"
                ]
            },

            "Coordinate Geometry": {
                notes: [
                    "The distance formula gives the distance between two points.",
                    "The midpoint formula gives the midpoint of a line segment.",
                    "The section formula gives the coordinates of a point dividing a line segment in a given ratio."
                ],
                questions: [
                    ["What is the distance formula?", "For points (x1,y1) and (x2,y2), distance = sqrt[(x2-x1)^2 + (y2-y1)^2]."],
                    ["What is the midpoint formula?", "Midpoint = ((x1+x2)/2, (y1+y2)/2)."],
                    ["What is the section formula?", "A point dividing a line internally in ratio m:n has coordinates ((m x2+n x1)/(m+n), (m y2+n y1)/(m+n))."]
                ],
                formula: [
                    "Distance = sqrt[(x2-x1)^2 + (y2-y1)^2]",
                    "Midpoint = ((x1+x2)/2, (y1+y2)/2)",
                    "Section formula = ((m x2+n x1)/(m+n), (m y2+n y1)/(m+n))"
                ]
            },

            "Introduction to Trigonometry": {
                notes: [
                    "Trigonometry studies relationships between angles and sides of right triangles.",
                    "sin theta = perpendicular/hypotenuse.",
                    "cos theta = base/hypotenuse.",
                    "tan theta = perpendicular/base.",
                    "cosec, sec and cot are reciprocal ratios.",
                    "Important identities are used to simplify and prove expressions."
                ],
                questions: [
                    ["What is sin theta?", "sin theta = perpendicular/hypotenuse."],
                    ["What is cos theta?", "cos theta = base/hypotenuse."],
                    ["What is tan theta?", "tan theta = perpendicular/base."],
                    ["State the main identities.", "sin^2 theta + cos^2 theta = 1; 1 + tan^2 theta = sec^2 theta; 1 + cot^2 theta = cosec^2 theta."],
                    ["What are reciprocal ratios?", "cosec theta = 1/sin theta, sec theta = 1/cos theta and cot theta = 1/tan theta."]
                ],
                formula: [
                    "sin theta = P/H",
                    "cos theta = B/H",
                    "tan theta = P/B",
                    "cosec theta = 1/sin theta",
                    "sec theta = 1/cos theta",
                    "cot theta = 1/tan theta",
                    "sin^2 theta + cos^2 theta = 1",
                    "1 + tan^2 theta = sec^2 theta",
                    "1 + cot^2 theta = cosec^2 theta"
                ]
            },

            "Some Applications of Trigonometry": {
                notes: [
                    "Heights and distances problems use right triangles and trigonometric ratios.",
                    "Angle of elevation is measured when the observer looks upward.",
                    "Angle of depression is measured when the observer looks downward.",
                    "Drawing a diagram first makes these problems easier."
                ],
                questions: [
                    ["What is angle of elevation?", "It is the angle between the horizontal and line of sight when the observer looks upward."],
                    ["What is angle of depression?", "It is the angle between the horizontal and line of sight when the observer looks downward."],
                    ["How should heights and distances problems be solved?", "Draw the figure, identify known quantities, select the suitable trigonometric ratio and solve the resulting equation."]
                ],
                formula: [
                    "tan theta = height/base",
                    "Use right-triangle relationships"
                ]
            },

            "Circles": {
                notes: [
                    "A tangent is a line that touches a circle at exactly one point.",
                    "The tangent at any point is perpendicular to the radius through the point of contact.",
                    "Tangents drawn from the same external point are equal in length."
                ],
                questions: [
                    ["What is a tangent?", "A tangent is a line that touches a circle at exactly one point."],
                    ["What is the relation between radius and tangent?", "The tangent at the point of contact is perpendicular to the radius through that point."],
                    ["What is the tangent theorem?", "Tangents drawn from the same external point to a circle are equal."]
                ],
                formula: [
                    "Radius perpendicular to tangent at point of contact",
                    "Tangents from an external point are equal"
                ]
            },

            "Areas Related to Circles": {
                notes: [
                    "The area of a circle depends on the square of its radius.",
                    "The circumference measures the length around the circle.",
                    "A sector is the region enclosed by two radii and an arc.",
                    "Arc length is the length of the curved part of a circle."
                ],
                questions: [
                    ["What is the area of a circle?", "Area = pi r^2."],
                    ["What is the circumference?", "Circumference = 2 pi r."],
                    ["What is a sector?", "A sector is the region bounded by two radii and the corresponding arc."],
                    ["What is arc length?", "For central angle theta degrees, arc length = theta/360 x 2 pi r."]
                ],
                formula: [
                    "Area = pi r^2",
                    "Circumference = 2 pi r",
                    "Sector area = theta/360 x pi r^2",
                    "Arc length = theta/360 x 2 pi r"
                ]
            },

            "Surface Areas and Volumes": {
                notes: [
                    "Surface area measures the outer surface of a solid.",
                    "Volume measures the space occupied by a solid.",
                    "Important solids include cylinder, cone, sphere, hemisphere and combinations of solids.",
                    "Always use consistent units before solving numerical problems."
                ],
                questions: [
                    ["What is the volume of a cylinder?", "Volume = pi r^2 h."],
                    ["What is the volume of a cone?", "Volume = 1/3 pi r^2 h."],
                    ["What is the volume of a sphere?", "Volume = 4/3 pi r^3."],
                    ["How are combined solids solved?", "Break the figure into familiar solids, calculate the required quantities and add or subtract them as required."]
                ],
                formula: [
                    "Cylinder volume = pi r^2 h",
                    "Cylinder curved surface area = 2 pi r h",
                    "Cone volume = 1/3 pi r^2 h",
                    "Sphere volume = 4/3 pi r^3",
                    "Sphere surface area = 4 pi r^2"
                ]
            },

            "Statistics": {
                notes: [
                    "Statistics deals with collection, organisation and interpretation of data.",
                    "Grouped data can be represented using class intervals and frequencies.",
                    "Class mark is the midpoint of a class interval.",
                    "Mean, median and mode are important measures of central tendency."
                ],
                questions: [
                    ["What is class mark?", "Class mark = (lower class limit + upper class limit)/2."],
                    ["What is mean for grouped data?", "Mean = sum(fi xi)/sum(fi)."],
                    ["What is median?", "Median is the value that divides the data into two equal parts."],
                    ["What is mode?", "Mode is the value or class associated with the highest frequency."]
                ],
                formula: [
                    "Class mark = (lower limit + upper limit)/2",
                    "Mean = sum(fi xi) / sum(fi)",
                    "Median = l + [(n/2-cf)/f]h",
                    "Mode = l + [(f1-f0)/(2f1-f0-f2)]h"
                ]
            },

            "Probability": {
                notes: [
                    "Probability measures the chance of occurrence of an event.",
                    "Probability lies between 0 and 1.",
                    "An impossible event has probability 0.",
                    "A sure event has probability 1.",
                    "The probability of the complement of an event is 1 minus the probability of the event."
                ],
                questions: [
                    ["What is probability?", "Probability measures the chance of occurrence of an event."],
                    ["What is the probability of an impossible event?", "The probability is 0."],
                    ["What is the probability of a sure event?", "The probability is 1."],
                    ["What is the range of probability?", "For any event E, 0 <= P(E) <= 1."],
                    ["What is the complement rule?", "P(not E) = 1 - P(E)."]
                ],
                formula: [
                    "P(E) = favourable outcomes / total outcomes",
                    "0 <= P(E) <= 1",
                    "P(not E) = 1 - P(E)"
                ]
            }
        }
    },


    /* =====================================================
       ENGLISH
       ===================================================== */

    english: {
        name: "English",
        description: "Literature, prose, poetry and supplementary reader",
        chapters: {

            "A Letter to God": {
                notes: [
                    "The story presents Lencho's complete faith in God.",
                    "A hailstorm destroys Lencho's crop.",
                    "Lencho writes a letter asking God for money.",
                    "The postmaster and employees collect money to help him.",
                    "Lencho receives less money than he requested and mistakenly suspects the post-office employees."
                ],
                questions: [
                    ["Why did Lencho write a letter to God?", "His crop was destroyed by hail and he needed money to recover. Because of his strong faith, he believed God would help him."],
                    ["What does Lencho's faith reveal?", "It shows his deep and unquestioning belief in God."],
                    ["Why was Lencho disappointed?", "He received less money than he had requested and believed someone had taken the rest."],
                    ["What is the irony in the story?", "The people Lencho suspects actually helped him by collecting money for him."]
                ]
            },

            "Nelson Mandela: Long Walk to Freedom": {
                notes: [
                    "The chapter describes Mandela's inauguration as South Africa's first Black president.",
                    "It reflects the end of apartheid and the beginning of democratic government.",
                    "Mandela explains that freedom belongs to all people.",
                    "He distinguishes courage from absence of fear.",
                    "The chapter emphasises equality, dignity and responsibility."
                ],
                questions: [
                    ["What does freedom mean to Mandela?", "True freedom means freedom from oppression and injustice for all people, not merely personal liberty."],
                    ["Why was the inauguration important?", "It marked the beginning of democratic government after apartheid and symbolised a new era of equality."],
                    ["What does Mandela say about courage?", "Courage does not mean absence of fear; it means overcoming fear and doing what is right."],
                    ["What is the central idea?", "The central idea is the struggle for freedom, equality and human dignity."]
                ]
            },

            "Two Stories about Flying": {
                notes: [
                    "The young seagull is initially afraid to fly.",
                    "His hunger eventually gives him the courage to make his first flight.",
                    "The Black Aeroplane presents a mystery involving another aircraft in a storm.",
                    "The stories explore fear, courage and uncertainty."
                ],
                questions: [
                    ["Why was the young seagull afraid to fly?", "He lacked confidence and feared that he would fall."],
                    ["How did he finally fly?", "Hunger made him jump towards food offered by his mother. He spread his wings and discovered that he could fly."],
                    ["What is mysterious about The Black Aeroplane?", "Another aeroplane appears to guide the pilot through the storm, but no such aircraft is later found on the radar."],
                    ["What is a central theme?", "The stories highlight courage, overcoming fear and facing uncertainty."]
                ]
            },

            "From the Diary of Anne Frank": {
                notes: [
                    "Anne Frank begins writing a diary because she wants a true friend.",
                    "She names the diary Kitty.",
                    "The chapter reveals her thoughts about school, teachers and friendships.",
                    "Anne is intelligent, observant and expressive."
                ],
                questions: [
                    ["Why did Anne start writing a diary?", "She wanted a true friend with whom she could share her thoughts and feelings."],
                    ["Why did Anne call her diary Kitty?", "She personified the diary as a close friend and addressed it as Kitty."],
                    ["Why did she say paper had more patience than people?", "She felt that paper could listen silently to all her thoughts without interrupting or judging her."],
                    ["Describe Anne's personality.", "Anne was intelligent, observant, thoughtful, expressive and sometimes talkative."]
                ]
            },

            "Glimpses of India": {
                notes: [
                    "The Goa section describes traditional bread-making.",
                    "Coorg is described through its natural beauty, culture and traditions.",
                    "Assam is presented through its famous tea gardens and tea-growing culture.",
                    "The chapter highlights the cultural and geographical variety of India."
                ],
                questions: [
                    ["What is special about Goa in the chapter?", "The chapter describes the long tradition of bread and bread-makers influenced by Portuguese culture."],
                    ["Why is Coorg famous?", "Coorg is known for forests, coffee plantations, wildlife, scenic beauty and distinctive culture."],
                    ["What is special about Assam?", "Assam is a major tea-growing region with extensive tea gardens."],
                    ["What is the central idea of the chapter?", "It presents the cultural richness and geographical diversity of India."]
                ]
            },

            "Mijbil the Otter": {
                notes: [
                    "Maxwell gets an otter and names it Mijbil.",
                    "Mij is playful, curious and intelligent.",
                    "He especially loves water.",
                    "The author develops a close bond with the animal."
                ],
                questions: [
                    ["Why did Maxwell get an otter?", "He wanted a companion animal and obtained an otter while travelling in Iraq."],
                    ["What was Mij like?", "Mij was playful, curious, intelligent and strongly attracted to water."],
                    ["What did Mij enjoy?", "He especially enjoyed playing in water and exploring objects around him."],
                    ["What is a major theme?", "The chapter celebrates companionship and the individuality of animals."]
                ]
            },

            "Madam Rides the Bus": {
                notes: [
                    "Valli is an eight-year-old girl fascinated by a bus passing through her village.",
                    "She carefully plans a bus journey to the town.",
                    "The journey gives her a feeling of independence.",
                    "Seeing the dead cow makes her understand the serious side of life."
                ],
                questions: [
                    ["Why did Valli want to ride the bus?", "She was fascinated by the bus and wanted to experience the journey independently."],
                    ["How did she prepare?", "She gathered information about the route, fare and timing and saved money."],
                    ["How did the dead cow affect her?", "It changed her mood and made her realise that life also has a sad and serious side."],
                    ["What qualities does Valli show?", "She shows curiosity, determination, observation and independence."]
                ]
            },

            "The Sermon at Benares": {
                notes: [
                    "Kisa Gotami is unable to accept the death of her son.",
                    "Buddha teaches her that death is universal.",
                    "She learns that every household has experienced loss.",
                    "The story teaches acceptance and freedom from excessive attachment."
                ],
                questions: [
                    ["Why was Kisa Gotami suffering?", "She was suffering because of the death of her only son and could not accept the loss."],
                    ["What did Buddha teach her?", "He taught her that death is universal and no family can escape it."],
                    ["What is the main message?", "The story teaches acceptance of death and the need to overcome excessive attachment."],
                    ["What change takes place in Kisa Gotami?", "She moves from personal grief towards understanding and acceptance of the reality of death."]
                ]
            },

            "The Proposal": {
                notes: [
                    "Lomov visits Chubukov intending to propose to Natalya.",
                    "Instead of a calm proposal, Lomov and Natalya argue about property and dogs.",
                    "The play uses exaggeration and misunderstanding to create humour.",
                    "The characters are strong-willed and argumentative."
                ],
                questions: [
                    ["Why does Lomov visit Chubukov?", "He comes to ask for Natalya's hand in marriage."],
                    ["Why is the play humorous?", "The characters argue over trivial matters even during a marriage proposal."],
                    ["Describe Natalya.", "She is practical, strong-willed, argumentative and quick-tempered."],
                    ["What is the main comic situation?", "A marriage proposal repeatedly turns into arguments over property and dogs."]
                ]
            },

            "A Triumph of Surgery": {
                notes: [
                    "Tricki becomes unhealthy because of overfeeding and lack of exercise.",
                    "Mrs Pumphrey excessively pampers him.",
                    "Dr Herriot changes Tricki's routine and diet.",
                    "Tricki recovers after receiving exercise and controlled food."
                ],
                questions: [
                    ["Why did Tricki become unhealthy?", "He was overfed and given too little exercise because of excessive pampering."],
                    ["How did Dr Herriot help Tricki?", "He controlled Tricki's diet and allowed him to exercise and interact with other dogs."],
                    ["What is the lesson?", "Love and care should be balanced with discipline, proper diet and exercise."],
                    ["Why is the title humorous?", "The 'surgery' is really a change in Tricki's lifestyle rather than a conventional operation."]
                ]
            },

            "The Thief's Story": {
                notes: [
                    "Hari Singh is a young thief who meets Anil.",
                    "Anil trusts Hari and gives him an opportunity to learn.",
                    "Hari steals money but later returns it.",
                    "Education and kindness begin to change Hari's outlook."
                ],
                questions: [
                    ["Why did Hari approach Anil?", "He intended to gain Anil's trust and eventually steal from him."],
                    ["Why did Hari return the money?", "Anil's kindness and the opportunity to learn made Hari value honesty and education."],
                    ["How did Anil influence Hari?", "Anil treated him with trust and offered him education and a chance for a better future."],
                    ["What is the main message?", "Trust, education and kindness can help a person change for the better."]
                ]
            },

            "The Midnight Visitor": {
                notes: [
                    "Ausable is an unusual-looking secret agent.",
                    "He uses intelligence rather than physical strength.",
                    "Max tries to obtain an important report.",
                    "Ausable uses a false story about a balcony to deceive Max."
                ],
                questions: [
                    ["Why was Ausable unusual?", "He did not fit the stereotypical appearance of a secret agent but was highly intelligent."],
                    ["How did Ausable defeat Max?", "He invented a believable story about a balcony and used quick thinking to make Max believe it."],
                    ["What is Ausable's greatest strength?", "His presence of mind and intelligence."],
                    ["What is the message?", "Intelligence and calm thinking can overcome danger."]
                ]
            },

            "A Question of Trust": {
                notes: [
                    "Horace Danby appears respectable but secretly steals to buy rare books.",
                    "He encounters a woman who pretends to be the owner.",
                    "She tricks him into opening the safe.",
                    "Horace is outsmarted by another thief."
                ],
                questions: [
                    ["Who was Horace Danby?", "He was a respectable-looking man who secretly committed thefts to obtain money for rare books."],
                    ["How was Horace tricked?", "A woman pretending to be the owner persuaded him to open the safe."],
                    ["What is ironic in the story?", "A careful thief is himself deceived and outsmarted by another thief."],
                    ["What is the lesson?", "Criminal behaviour can produce unexpected consequences and deception can work against the deceiver."]
                ]
            },

            "Footprints without Feet": {
                notes: [
                    "Griffin discovers a method of becoming invisible.",
                    "He uses science irresponsibly.",
                    "He steals and frightens people.",
                    "The story shows that scientific knowledge must be accompanied by moral responsibility."
                ],
                questions: [
                    ["Why did Griffin become invisible?", "He discovered a scientific method to make his body transparent."],
                    ["Why was Griffin lawless?", "He used his scientific discovery for selfish and criminal purposes."],
                    ["What is the main message?", "Scientific knowledge without moral responsibility can be harmful."],
                    ["What kind of person was Griffin?", "He was intelligent and scientifically capable but irresponsible and selfish."]
                ]
            },

            "The Making of a Scientist": {
                notes: [
                    "Richard Ebright develops a strong scientific interest from childhood.",
                    "His mother encourages curiosity and learning.",
                    "Collecting butterflies develops his observation skills.",
                    "He gradually moves from collecting to serious scientific investigation."
                ],
                questions: [
                    ["What qualities helped Ebright?", "Curiosity, hard work, observation, determination and a willingness to learn helped him."],
                    ["How did butterflies help him?", "Butterfly collecting developed his observation and scientific curiosity."],
                    ["What role did his mother play?", "She encouraged learning, provided books and activities and helped him develop discipline."],
                    ["What is the main message?", "Curiosity, perseverance, guidance and scientific thinking can help develop a successful scientist."]
                ]
            },

            "The Necklace": {
                notes: [
                    "Matilda is dissatisfied with her modest life.",
                    "She borrows a necklace for a social event.",
                    "She loses the necklace and replaces it with an expensive one.",
                    "She spends years repaying the debt.",
                    "At the end she discovers that the original necklace was an imitation."
                ],
                questions: [
                    ["Why was Matilda unhappy?", "She desired wealth, luxury and social status and felt dissatisfied with her modest life."],
                    ["What happened to the necklace?", "It was lost and replaced with an expensive necklace, causing years of financial hardship."],
                    ["What is the irony at the end?", "The original necklace was an imitation, so the hardship caused by replacing it was unnecessary."],
                    ["What is the lesson?", "Dishonesty, pride and dissatisfaction can lead to unnecessary suffering."]
                ]
            },

            "Bholi": {
                notes: [
                    "Bholi is neglected because of her appearance and speech difficulty.",
                    "School and education give her confidence.",
                    "Her teacher encourages her patiently.",
                    "Bholi refuses a marriage proposal when the groom demands dowry.",
                    "Education gives her dignity and self-respect."
                ],
                questions: [
                    ["Why was Bholi neglected?", "Her family underestimated her because of her appearance and speech difficulty."],
                    ["How did education change Bholi?", "Education gave her confidence, knowledge and self-respect."],
                    ["Why did Bholi reject Bishamber?", "He demanded dowry and insulted her family, so she refused to accept the unfair marriage."],
                    ["What is the main message?", "Education can empower a person and help them stand up for dignity and self-respect."]
                ]
            },

            "The Book That Saved the Earth": {
                notes: [
                    "The play presents a humorous attempted invasion of Earth.",
                    "Think-Tank is overconfident and misunderstands ordinary books.",
                    "Nursery rhymes are interpreted as serious military information.",
                    "The misunderstanding causes the Martians to abandon the invasion."
                ],
                questions: [
                    ["Why did Think-Tank want to attack Earth?", "He believed Earth could be a threat to Mars and wanted to demonstrate his power."],
                    ["How did books save Earth?", "The Martians misunderstood ordinary books and nursery rhymes as dangerous military information and abandoned their plan."],
                    ["Why is the play humorous?", "It uses misunderstandings, exaggerated characters and absurd interpretations of ordinary material."],
                    ["What is the main message?", "Intelligence must be combined with correct understanding, humility and careful reasoning."]
                ]
            }
        }
    },


    /* =====================================================
       HINDI
       ===================================================== */

    hindi: {
        name: "Hindi",
        description: "Literature and Hindi language practice",
        chapters: {

            "??????? - ???? ??? ?????": {
                notes: [
                    "????? ??????? ??? ???? ?? ???? ????? ?? ??????? ???",
                    "????? ??? ???, ??????, ???? ?? ?????? ?? ????? ??????? ???? ???",
                    "???? ?????? ??? ?????, ?????, ????? ?? ????? ?????? ???? ????",
                    "??????? ??? ????/??? ?????, ???????, ?????? ?? ??????????? ???????????? ???? ????"
                ],
                questions: [
                    ["???? ?? ???? ??? ???? ???? ???", "???? ??????? ?????-???? ??? ???? ???? ??, ???? ???? ??? ??, ???, ??? ?? ?????????? ???? ?? ????? ??????? ???? ???"],
                    ["????? ??? ??? ?? ???? ??????? ???", "??? ????? ?? ??? ??????? ?? ??????? ?? ?????? ???? ??? ???? ????? ?? ????? ?? ?????? ?????? ???? ???"],
                    ["??????? ????? ?? ???? ??? ???", "??????? ????-?????, ??????, ???????, ?????-????? ?? ?????????? ?? ?????? ?? ?????? ???? ???"]
                ]
            },

            "??????? ??? ????": {
                notes: [
                    "????? ??????? ??? ????, ?????, ????, ????, ?????? ?? ???? ????? ?????? ?? ?????? ???? ???? ???",
                    "???? ??? ????, ????????, ?????, ???????? ?? ???? ???????? ????????? ?? ?????? ?????? ???",
                    "????? ????? ??? ???? ??????, ????? ?? ???????? ???? ??????"
                ],
                questions: [
                    ["????? ????? ?? ???? ????????? ????", "????? ????? ??????????, ??????, ?????, ???????? ?? ?????? ??????? ?? ????? ???? ???"],
                    ["???? ???? ??? ???? ????? ???? ??????", "???? ?? ??? ???????, ??????, ????-?????, ???? ?? ???? ????? ?????? ???"],
                    ["???????? ???? ??? ???? ???????????? ???", "???? ?? ????????, ???????? ?????, ???? ???? ?? ??????? ???????? ?????? ????"]
                ]
            }
        }
    },


    /* =====================================================
       SANSKRIT
       ===================================================== */

    sanskrit: {
        name: "Sanskrit",
        description: "Literature, grammar, Sandhi, Dhatu Roop and Shlok practice",
        chapters: {

            "??????????????": {
                notes: [
                    "??? ??? ???????? ?? ??????? ?? ??????? ?? ??????? ????? ??? ???",
                    "??????? ?????? ?? ???? ????? ?? ???? ?? ???? ???",
                    "??????? ?? ???? ????, ?? ?? ???? ???????? ???? ????",
                    "???????? ?? ????? ???????? ??????? ?? ??????? ???"
                ],
                questions: [
                    ["??????????? ???????? ???????? ?????????", "??????????? ???????? ???????????? ??? ???????? ????????? ?????? ???????? ??????"],
                    ["????????? ?? ????? ???????", "????????? ?????, ??? ??? ????? ??????? ?????? ?? ????????? ?? ?????????? ????? ???"],
                    ["??? ??????????? ?????? ??? ???????", "????????????, ?????????, ??????????? ??? ??????????????? ??????????? ?????? ?????? ????????"]
                ]
            },

            "???????": {
                notes: [
                    "????, ????, ???????, ??????? ?? ??????? ?????-???? ??????? ?? ???????????? ??? ????",
                    "???? ?? ??? ???? ?? ?????? ????? ????",
                    "????????? ?? ?????? ????? ??? ??????? ?? ?????? ???? ???",
                    "?????? ??? ?????, ?????? ?? ???? ?? ????? ?? ??????? ?????? ???"
                ],
                questions: [
                    ["????? ?????", "?????? ??????? ???????????? ?????? ?? ?????????????? ???? ?? ????? ??? ???????"],
                    ["???????? ?????", "????? ?????, ??? ??? ?????????? ????????? ???? ????????? ???????"],
                    ["????? ?????", "?????? ?? ?????????? ?????????????? ???????? ????? ??? ???????"]
                ]
            }
        }
    }
};


/* =========================================================
   GENERIC FALLBACK CONTENT
   ========================================================= */

function createFallbackChapter(subjectName, chapterName) {

    return {
        notes: [
            subjectName + " ?? " + chapterName + " ?????? ?? ????? ?? ??????",
            "?????? ?? ????? concepts, definitions ?? examples ?? revise ?????",
            "Important questions ?? ????? practise ?????",
            "Board examination ?? ??? keywords ?? important points ??? ?????"
        ],
        questions: [
            [
                "What is the main idea of this chapter?",
                "The main idea should be understood from the chapter's central concepts, definitions, examples and important applications."
            ],
            [
                "How should this chapter be prepared?",
                "First understand the concepts, then revise important definitions and finally practise questions and examples."
            ],
            [
                "What should be revised before the examination?",
                "Revise important concepts, definitions, formulas, examples and previous questions."
            ]
        ],
        formula: []
    };
}


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let activeSubject = "";
let activeChapter = "";

let quizQuestions = [];
let currentQuestion = 0;
let quizScore = 0;

let timerInterval = null;
let remainingSeconds = 25 * 60;


/* =========================================================
   UTILITY FUNCTIONS
   ========================================================= */

function safeText(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getSubject(subject) {

    if (
        SUBJECT_DATA[subject]
    ) {
        return SUBJECT_DATA[subject];
    }

    return null;
}


function getChapter(subject, chapter) {

    const data =
        getSubject(subject);

    if (
        data &&
        data.chapters &&
        data.chapters[chapter]
    ) {
        return data.chapters[chapter];
    }

    if (subject === "science") {
        const fallback =
            createFallbackChapter(
                "Science",
                chapter
            );

        return fallback;
    }

    if (subject === "sst") {
        return createFallbackChapter(
            "Social Science",
            chapter
        );
    }

    if (subject === "maths") {
        return createFallbackChapter(
            "Mathematics",
            chapter
        );
    }

    if (subject === "english") {
        return createFallbackChapter(
            "English",
            chapter
        );
    }

    if (subject === "hindi") {
        return createFallbackChapter(
            "Hindi",
            chapter
        );
    }

    if (subject === "sanskrit") {
        return createFallbackChapter(
            "Sanskrit",
            chapter
        );
    }

    return createFallbackChapter(
        subject,
        chapter
    );
}


/* =========================================================
   SECTION NAVIGATION
   ========================================================= */

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(
            ".section"
        );

    sections.forEach(section => {

        section.classList.remove(
            "active"
        );

        section.style.display =
            "none";
    });

    const target =
        document.getElementById(
            sectionId
        );

    if (target) {

        target.classList.add(
            "active"
        );

        target.style.display =
            "block";
    }

    clearInterval(timerInterval);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (
        sectionId === "quiz"
    ) {
        startQuiz();
    }
}


/* =========================================================
   OPEN SUBJECT
   ========================================================= */

function showSubject(subject) {

    const data =
        getSubject(subject);

    if (!data) {
        return;
    }

    activeSubject =
        subject;

    const title =
        document.getElementById(
            "subject-title"
        );

    const chapterList =
        document.getElementById(
            "chapter-list"
        );

    if (!title || !chapterList) {
        return;
    }

    title.textContent =
        data.name;

    let html = "";

    Object.keys(
        data.chapters
    ).forEach((chapter, index) => {

        html += `
            <div class="subject-card">

                <h3>
                    ${index + 1}. ${safeText(chapter)}
                </h3>

                <p>
                    Chapter Notes, Important Questions and Revision
                </p>

                <button
                    type="button"
                    class="chapter-open-button"
                    data-chapter="${safeText(chapter)}">

                    Open Chapter

                </button>

            </div>
        `;
    });

    chapterList.innerHTML =
        html;

    chapterList
        .querySelectorAll(
            ".chapter-open-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const chapter =
                        this.getAttribute(
                            "data-chapter"
                        );

                    openChapter(
                        subject,
                        chapter
                    );
                }
            );
        });

    showSection(
        "subject-page"
    );
}


/* =========================================================
   CHAPTER PAGE
   ========================================================= */

function openChapter(
    subject,
    chapter
) {

    activeSubject =
        subject;

    activeChapter =
        chapter;

    const data =
        getChapter(
            subject,
            chapter
        );

    const title =
        document.getElementById(
            "subject-title"
        );

    const chapterList =
        document.getElementById(
            "chapter-list"
        );

    if (!title || !chapterList) {
        return;
    }

    title.innerHTML =
        safeText(
            getSubject(subject)
                ? getSubject(subject).name
                : subject
        ) +
        " - " +
        safeText(chapter);

    let html = "";

    html += `
        <div class="note-box">

            <h2>
                ${safeText(chapter)}
            </h2>

            <p>
                <b>Subject:</b>
                ${safeText(
                    getSubject(subject)
                        ? getSubject(subject).name
                        : subject
                )}
            </p>

            <p>
                Read the notes carefully,
                then practise the questions.
            </p>

        </div>
    `;


    if (
        data.notes &&
        data.notes.length
    ) {

        html += `
            <div class="note-box">

                <h3>
                    Chapter Notes
                </h3>

                ${data.notes.map(
                    (note, index) => `
                        <div class="study-note">

                            <b>
                                ${index + 1}.
                            </b>

                            ${safeText(note)}

                        </div>
                    `
                ).join("")}

            </div>
        `;
    }


    if (
        data.formula &&
        data.formula.length
    ) {

        html += `
            <div class="note-box">

                <h3>
                    Formula / Important Points
                </h3>

                ${data.formula.map(
                    formula => `
                        <div class="formula">
                            ${safeText(formula)}
                        </div>
                    `
                ).join("")}

            </div>
        `;
    }


    if (
        data.questions &&
        data.questions.length
    ) {

        html += `
            <div class="note-box">

                <h3>
                    Important Questions with Detailed Answers
                </h3>

                ${data.questions.map(
                    (item, index) => `
                        <details
                            class="question-box">

                            <summary>
                                Q${index + 1}.
                                ${safeText(item[0])}
                            </summary>

                            <p>
                                <b>
                                    Answer:
                                </b>
                            </p>

                            <p>
                                ${safeText(item[1])}
                            </p>

                        </details>
                    `
                ).join("")}

            </div>
        `;
    }


    html += `
        <div class="note-box">

            <h3>
                Revision Checklist
            </h3>

            <label>
                <input
                    type="checkbox">
                I revised the chapter notes.
            </label>

            <br><br>

            <label>
                <input
                    type="checkbox">
                I learnt the important definitions.
            </label>

            <br><br>

            <label>
                <input
                    type="checkbox">
                I practised the important questions.
            </label>

            <br><br>

            <label>
                <input
                    type="checkbox">
                I revised formulas / key points.
            </label>

        </div>

        <div class="note-box">

            <button
                type="button"
                id="chapterQuizButton">

                Start Chapter Quiz

            </button>

            <button
                type="button"
                id="chapterBackButton">

                Back to Chapters

            </button>

        </div>
    `;

    chapterList.innerHTML =
        html;

    document
        .getElementById(
            "chapterQuizButton"
        )
        .onclick = function () {

            startChapterQuiz(
                subject,
                chapter
            );
        };

    document
        .getElementById(
            "chapterBackButton"
        )
        .onclick = function () {

            showSubject(
                subject
            );
        };

    showSection(
        "subject-page"
    );
}


/* =========================================================
   PAPERS
   ========================================================= */

function showPapers(subject) {

    const paperList =
        document.getElementById(
            "paper-list"
        );

    if (!paperList) {
        return;
    }

    const names = {
        science: "Science",
        maths: "Mathematics",
        sst: "Social Science",
        english: "English",
        hindi: "Hindi",
        sanskrit: "Sanskrit"
    };

    const name =
        names[subject] ||
        subject;

    paperList.innerHTML = `
        <div class="note-box">

            <h2>
                ${safeText(name)} - Previous Year Papers
            </h2>

            <p>
                Use the official RBSE website for
                authentic previous-year question papers.
            </p>

            <p>
                <a
                    href="https://rajeduboard.rajasthan.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer">

                    RBSE Official Website

                </a>
            </p>

            <p>
                <a
                    href="https://rajeduboard.rajasthan.gov.in/contents.htm"
                    target="_blank"
                    rel="noopener noreferrer">

                    RBSE Official Contents

                </a>
            </p>

        </div>
    `;

    showSection(
        "papers"
    );
}


/* =========================================================
   QUIZ QUESTION CREATION
   ========================================================= */

function buildQuizQuestions(
    subject,
    chapter
) {

    const data =
        getChapter(
            subject,
            chapter
        );

    if (
        !data ||
        !data.questions
    ) {
        return [];
    }

    return data.questions.map(
        item => ({

            question: item[0],

            answer: item[1],

            subject: subject,

            chapter: chapter

        })
    );
}


/* =========================================================
   CHAPTER QUIZ
   ========================================================= */

function startChapterQuiz(
    subject,
    chapter
) {

    quizQuestions =
        buildQuizQuestions(
            subject,
            chapter
        );

    currentQuestion = 0;
    quizScore = 0;

    showSection(
        "quiz"
    );

    renderQuizQuestion();
}


/* =========================================================
   MIXED QUIZ
   ========================================================= */

function startQuiz() {

    quizQuestions = [];

    const subjects =
        Object.keys(
            SUBJECT_DATA
        );

    subjects.forEach(
        subject => {

            const chapters =
                Object.keys(
                    SUBJECT_DATA[
                        subject
                    ].chapters
                );

            chapters
                .slice(0, 5)
                .forEach(
                    chapter => {

                        const questions =
                            buildQuizQuestions(
                                subject,
                                chapter
                            );

                        questions
                            .slice(0, 2)
                            .forEach(
                                question => {

                                    quizQuestions.push(
                                        question
                                    );

                                }
                            );
                    }
                );
        }
    );

    for (
        let i = quizQuestions.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            quizQuestions[i],
            quizQuestions[j]
        ] = [
            quizQuestions[j],
            quizQuestions[i]
        ];
    }

    quizQuestions =
        quizQuestions.slice(
            0,
            20
        );

    currentQuestion = 0;
    quizScore = 0;

    renderQuizQuestion();
}


/* =========================================================
   QUIZ RENDER
   ========================================================= */

function renderQuizQuestion() {

    const questionElement =
        document.getElementById(
            "question"
        );

    const answerElement =
        document.getElementById(
            "answers"
        );

    const resultElement =
        document.getElementById(
            "quiz-result"
        );

    if (
        !questionElement ||
        !answerElement
    ) {
        return;
    }

    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        questionElement.innerHTML =
            "Quiz Complete";

        answerElement.innerHTML = `
            <div class="note-box">

                <h3>
                    Your Score:
                    ${quizScore}/${quizQuestions.length}
                </h3>

                <p>
                    Revise the questions you found difficult.
                </p>

                <button
                    type="button"
                    onclick="startQuiz()">

                    Try Again

                </button>

            </div>
        `;

        if (resultElement) {

            resultElement.textContent =
                "Well done! Keep practising.";

        }

        return;
    }

    const item =
        quizQuestions[
            currentQuestion
        ];

    questionElement.innerHTML = `
        <b>
            Question ${currentQuestion + 1}
            of ${quizQuestions.length}
        </b>
        <br><br>
        ${safeText(item.question)}
    `;

    answerElement.innerHTML = "";

    if (resultElement) {
        resultElement.textContent = "";
    }

    const options = [
        item.answer
    ];

    const otherAnswers =
        quizQuestions
            .filter(
                (_, index) =>
                    index !== currentQuestion
            )
            .map(
                question =>
                    question.answer
            );

    for (
        let i = 0;
        i < 3 && i < otherAnswers.length;
        i++
    ) {

        options.push(
            otherAnswers[i]
        );
    }

    while (
        options.length < 4
    ) {

        options.push(
            "Incorrect option"
        );
    }

    for (
        let i = options.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            options[i],
            options[j]
        ] = [
            options[j],
            options[i]
        ];
    }

    options.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "quiz-answer";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                function () {

                    checkQuizAnswer(
                        option,
                        item.answer
                    );

                }
            );

            answerElement.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   CHECK QUIZ ANSWER
   ========================================================= */

function checkQuizAnswer(
    selected,
    correct
) {

    const result =
        document.getElementById(
            "quiz-result"
        );

    const buttons =
        document.querySelectorAll(
            ".quiz-answer"
        );

    buttons.forEach(
        button => {

            button.disabled =
                true;
        }
    );

    if (
        selected === correct
    ) {

        quizScore++;

        if (result) {

            result.innerHTML =
                "<b>Correct answer!</b>";

        }

    } else {

        if (result) {

            result.innerHTML =
                "<b>Correct answer:</b> " +
                safeText(correct);

        }
    }

    setTimeout(
        function () {

            currentQuestion++;

            renderQuizQuestion();

        },
        900
    );
}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (
        quizQuestions.length === 0
    ) {

        startQuiz();

        return;
    }

    currentQuestion++;

    renderQuizQuestion();
}


/* =========================================================
   TIMER
   ========================================================= */

function updateTimerDisplay() {

    const display =
        document.getElementById(
            "timer-display"
        );

    if (!display) {
        return;
    }

    const minutes =
        Math.floor(
            remainingSeconds / 60
        );

    const seconds =
        remainingSeconds % 60;

    display.textContent =
        String(minutes).padStart(
            2,
            "0"
        ) +
        ":" +
        String(seconds).padStart(
            2,
            "0"
        );
}


function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    timerInterval =
        setInterval(
            function () {

                if (
                    remainingSeconds <=
                    0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    timerInterval =
                        null;

                    alert(
                        "Study session complete!"
                    );

                    return;
                }

                remainingSeconds--;

                updateTimerDisplay();

            },
            1000
        );
}


function pauseTimer() {

    if (
        timerInterval !== null
    ) {

        clearInterval(
            timerInterval
        );

        timerInterval =
            null;
    }
}


function resetTimer() {

    pauseTimer();

    remainingSeconds =
        25 * 60;

    updateTimerDisplay();
}


/* =========================================================
   STUDY TIPS
   ========================================================= */

function loadStudyTips() {

    const tips = [
        "Understand the concept before memorising it.",
        "Make short notes after completing every topic.",
        "Practise mathematics regularly instead of studying it only before exams.",
        "For Science, learn definitions, diagrams, equations and applications.",
        "For SST, revise dates, events, definitions, maps and important differences.",
        "For English, focus on themes, characters, messages and important events.",
        "Use previous-year papers to understand question patterns.",
        "Revise difficult chapters more frequently.",
        "Take short breaks during long study sessions.",
        "Write answers in your own clear and organised language."
    ];

    const tipsSection =
        document.getElementById(
            "tips"
        );

    if (!tipsSection) {
        return;
    }

    let tipContainer =
        tipsSection.querySelector(
            ".generated-tips"
        );

    if (!tipContainer) {

        tipContainer =
            document.createElement(
                "div"
            );

        tipContainer.className =
            "generated-tips";

        tipsSection.appendChild(
            tipContainer
        );
    }

    tipContainer.innerHTML =
        tips.map(
            (tip, index) => `
                <div class="tip">

                    <b>
                        ${index + 1}.
                    </b>

                    ${safeText(tip)}

                </div>
            `
        ).join("");
}


/* =========================================================
   INITIALISE WEBSITE
   ========================================================= */

function initialiseStudyWebsite() {

    loadStudyTips();

    resetTimer();

    const subjectPage =
        document.getElementById(
            "subject-page"
        );

    if (subjectPage) {

        subjectPage.style.display =
            "none";
    }

    const papers =
        document.getElementById(
            "papers"
        );

    if (papers) {

        papers.style.display =
            "none";
    }

    const quiz =
        document.getElementById(
            "quiz"
        );

    if (quiz) {

        quiz.style.display =
            "none";
    }

    const timer =
        document.getElementById(
            "timer"
        );

    if (timer) {

        timer.style.display =
            "none";
    }

    const tips =
        document.getElementById(
            "tips"
        );

    if (tips) {

        tips.style.display =
            "none";
    }

    const home =
        document.getElementById(
            "home"
        );

    if (home) {

        home.classList.add(
            "active"
        );

        home.style.display =
            "block";
    }
}


/* =========================================================
   GLOBAL EXPORTS
   ========================================================= */

window.showSection =
    showSection;

window.showSubject =
    showSubject;

window.openChapter =
    openChapter;

window.showPapers =
    showPapers;

window.startQuiz =
    startQuiz;

window.startChapterQuiz =
    startChapterQuiz;

window.nextQuestion =
    nextQuestion;

window.startTimer =
    startTimer;

window.pauseTimer =
    pauseTimer;

window.resetTimer =
    resetTimer;


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseStudyWebsite
    );

} else {

    initialiseStudyWebsite();

}
