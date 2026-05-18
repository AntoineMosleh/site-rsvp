-- ============================================
-- Insert all wedding guests - 108 families
-- Run this after 003_add_link_to_families.sql
-- ============================================

-- 1. KesserwaniToni
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniToni');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniToni'), 'Toni', 1),
  ((SELECT id FROM families WHERE link = 'KesserwaniToni'), 'Rania', 2),
  ((SELECT id FROM families WHERE link = 'KesserwaniToni'), 'Boutros', 3),
  ((SELECT id FROM families WHERE link = 'KesserwaniToni'), 'Marie', 4),
  ((SELECT id FROM families WHERE link = 'KesserwaniToni'), 'Christelle', 5);

-- 2. KesserwaniJoseph
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniJoseph');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Joseph', 1),
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Noelle', 2),
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Antoine', 3),
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Marie', 4),
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Angelina', 5),
  ((SELECT id FROM families WHERE link = 'KesserwaniJoseph'), 'Céline', 6);

-- 3. Nicolas
INSERT INTO families (family_name, link) VALUES ('Nicolas', 'Nicolas');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Nicolas'), 'Tony', 1),
  ((SELECT id FROM families WHERE link = 'Nicolas'), 'Samia', 2),
  ((SELECT id FROM families WHERE link = 'Nicolas'), 'Elie', 3);

-- 4. Bakhour
INSERT INTO families (family_name, link) VALUES ('Bakhour', 'Bakhour');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Bakhour'), 'Jean', 1),
  ((SELECT id FROM families WHERE link = 'Bakhour'), 'Rana', 2);

-- 5. KesserwaniJamal
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniJamal');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniJamal'), 'Jamal', 1),
  ((SELECT id FROM families WHERE link = 'KesserwaniJamal'), 'Elie', 2),
  ((SELECT id FROM families WHERE link = 'KesserwaniJamal'), 'Marie', 3);

-- 6. KesserwaniAssaad
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniAssaad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniAssaad'), 'Assaad', 1),
  ((SELECT id FROM families WHERE link = 'KesserwaniAssaad'), 'Marie', 2);

-- 7. AbouChaaya
INSERT INTO families (family_name, link) VALUES ('Abou Chaaya', 'AbouChaaya');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbouChaaya'), 'Najem', 1);

-- 8. Kayrouz
INSERT INTO families (family_name, link) VALUES ('Kayrouz', 'Kayrouz');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Kayrouz'), 'Nicole', 1),
  ((SELECT id FROM families WHERE link = 'Kayrouz'), 'Boutros', 2),
  ((SELECT id FROM families WHERE link = 'Kayrouz'), 'Joseph', 3);

-- 9. KesserwaniTherese
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniTherese');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniTherese'), 'Therese', 1);

-- 10. SaadeIsabelle
INSERT INTO families (family_name, link) VALUES ('Saade', 'SaadeIsabelle');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'SaadeIsabelle'), 'Isabelle', 1),
  ((SELECT id FROM families WHERE link = 'SaadeIsabelle'), 'Mazen', 2);

-- 11. SaadeElie
INSERT INTO families (family_name, link) VALUES ('Saade', 'SaadeElie');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'SaadeElie'), 'Elie', 1),
  ((SELECT id FROM families WHERE link = 'SaadeElie'), 'Chantale', 2);

-- 12. SaadeRached
INSERT INTO families (family_name, link) VALUES ('Saade', 'SaadeRached');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'SaadeRached'), 'Rached', 1),
  ((SELECT id FROM families WHERE link = 'SaadeRached'), 'Rita', 2);

-- 13. Sawaya
INSERT INTO families (family_name, link) VALUES ('Sawaya', 'Sawaya');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Sawaya'), 'Antoinette', 1),
  ((SELECT id FROM families WHERE link = 'Sawaya'), 'Charbel', 2),
  ((SELECT id FROM families WHERE link = 'Sawaya'), 'Tony', 3);

-- 14. Abboud
INSERT INTO families (family_name, link) VALUES ('Abboud', 'Abboud');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Abboud'), 'Rony', 1),
  ((SELECT id FROM families WHERE link = 'Abboud'), 'Maya', 2),
  ((SELECT id FROM families WHERE link = 'Abboud'), 'Serena', 3),
  ((SELECT id FROM families WHERE link = 'Abboud'), 'Michael', 4);

-- 15. KesserwaniPierre
INSERT INTO families (family_name, link) VALUES ('Kesserwani', 'KesserwaniPierre');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KesserwaniPierre'), 'Pierre', 1),
  ((SELECT id FROM families WHERE link = 'KesserwaniPierre'), 'Jocelyne', 2),
  ((SELECT id FROM families WHERE link = 'KesserwaniPierre'), 'Justine', 3),
  ((SELECT id FROM families WHERE link = 'KesserwaniPierre'), 'Elie', 4),
  ((SELECT id FROM families WHERE link = 'KesserwaniPierre'), 'Pia', 5);

-- 16. Karam
INSERT INTO families (family_name, link) VALUES ('Karam', 'Karam');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Karam'), 'Perla', 1),
  ((SELECT id FROM families WHERE link = 'Karam'), 'Georges', 2);

-- 17. Wakim
INSERT INTO families (family_name, link) VALUES ('Wakim', 'Wakim');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Wakim'), 'Johnny', 1);

-- 18. MoslehElie
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehElie');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehElie'), 'Elie', 1),
  ((SELECT id FROM families WHERE link = 'MoslehElie'), 'Adele', 2),
  ((SELECT id FROM families WHERE link = 'MoslehElie'), 'Mayoulati', 3),
  ((SELECT id FROM families WHERE link = 'MoslehElie'), 'Antoine', 4);

-- 19. Siccardi
INSERT INTO families (family_name, link) VALUES ('Siccardi', 'Siccardi');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Siccardi'), 'Laurianne', 1);

-- 20. MoslehAntoine
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehAntoine');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehAntoine'), 'Antoine', 1),
  ((SELECT id FROM families WHERE link = 'MoslehAntoine'), 'Sonia', 2),
  ((SELECT id FROM families WHERE link = 'MoslehAntoine'), 'Roni', 3);

-- 21. Sassine
INSERT INTO families (family_name, link) VALUES ('Sassine', 'Sassine');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Sassine'), 'Katia', 1);

-- 22. MoslehJoey
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehJoey');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehJoey'), 'Joey', 1),
  ((SELECT id FROM families WHERE link = 'MoslehJoey'), 'Micha', 2);

-- 23. MoslehMansour
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehMansour');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehMansour'), 'Mansour', 1),
  ((SELECT id FROM families WHERE link = 'MoslehMansour'), 'Ranine', 2);

-- 24. MoslehNabil
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehNabil');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehNabil'), 'Nabil', 1),
  ((SELECT id FROM families WHERE link = 'MoslehNabil'), 'Madonna', 2),
  ((SELECT id FROM families WHERE link = 'MoslehNabil'), 'Marceline', 3),
  ((SELECT id FROM families WHERE link = 'MoslehNabil'), 'Rhéa', 4);

-- 25. AlNasrFawaz
INSERT INTO families (family_name, link) VALUES ('Al Nasr', 'AlNasrFawaz');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AlNasrFawaz'), 'Fawaz', 1),
  ((SELECT id FROM families WHERE link = 'AlNasrFawaz'), 'Marcelle', 2),
  ((SELECT id FROM families WHERE link = 'AlNasrFawaz'), 'Rana', 3);

-- 26. AlNasrCharbel
INSERT INTO families (family_name, link) VALUES ('Al Nasr', 'AlNasrCharbel');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AlNasrCharbel'), 'Charbel', 1),
  ((SELECT id FROM families WHERE link = 'AlNasrCharbel'), 'Vanessa', 2);

-- 27. Obayane
INSERT INTO families (family_name, link) VALUES ('Obayane', 'Obayane');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Obayane'), 'Abdo', 1),
  ((SELECT id FROM families WHERE link = 'Obayane'), 'Maria', 2);

-- 28. Khachan
INSERT INTO families (family_name, link) VALUES ('Khachan', 'Khachan');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Khachan'), 'Georges', 1),
  ((SELECT id FROM families WHERE link = 'Khachan'), 'Rawiya', 2),
  ((SELECT id FROM families WHERE link = 'Khachan'), 'Joury', 3);

-- 29. Azzi
INSERT INTO families (family_name, link) VALUES ('Azzi', 'Azzi');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Azzi'), 'Georges', 1),
  ((SELECT id FROM families WHERE link = 'Azzi'), 'Antoinette', 2),
  ((SELECT id FROM families WHERE link = 'Azzi'), 'Nour', 3),
  ((SELECT id FROM families WHERE link = 'Azzi'), 'Michel', 4);

-- 30. AbiAboudIsaac
INSERT INTO families (family_name, link) VALUES ('Abi Aboud', 'AbiAboudIsaac');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbiAboudIsaac'), 'Isaac', 1),
  ((SELECT id FROM families WHERE link = 'AbiAboudIsaac'), 'Chekrieh', 2);

-- 31. Graiche
INSERT INTO families (family_name, link) VALUES ('Graiche', 'Graiche');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Graiche'), 'Micha', 1),
  ((SELECT id FROM families WHERE link = 'Graiche'), 'Georges', 2),
  ((SELECT id FROM families WHERE link = 'Graiche'), 'Cybèle', 3),
  ((SELECT id FROM families WHERE link = 'Graiche'), 'Gaelle', 4),
  ((SELECT id FROM families WHERE link = 'Graiche'), 'Elie', 5);

-- 32. AbiAboudAntoine
INSERT INTO families (family_name, link) VALUES ('Abi Aboud', 'AbiAboudAntoine');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbiAboudAntoine'), 'Antoine', 1),
  ((SELECT id FROM families WHERE link = 'AbiAboudAntoine'), 'Aurore', 2);

-- 33. AbiAboudCesar
INSERT INTO families (family_name, link) VALUES ('Abi Aboud', 'AbiAboudCesar');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbiAboudCesar'), 'César', 1),
  ((SELECT id FROM families WHERE link = 'AbiAboudCesar'), 'Isabelle', 2);

-- 34. SawayaAdnan
INSERT INTO families (family_name, link) VALUES ('Sawaya', 'SawayaAdnan');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'SawayaAdnan'), 'Adnan', 1),
  ((SELECT id FROM families WHERE link = 'SawayaAdnan'), 'Mona', 2),
  ((SELECT id FROM families WHERE link = 'SawayaAdnan'), 'Toni', 3),
  ((SELECT id FROM families WHERE link = 'SawayaAdnan'), 'Sara', 4);

-- 35. SawayaSamer
INSERT INTO families (family_name, link) VALUES ('Sawaya', 'SawayaSamer');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'SawayaSamer'), 'Samer', 1),
  ((SELECT id FROM families WHERE link = 'SawayaSamer'), 'Amy', 2);

-- 36. KayalHinde
INSERT INTO families (family_name, link) VALUES ('Kayal', 'KayalHinde');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KayalHinde'), 'Hinde', 1),
  ((SELECT id FROM families WHERE link = 'KayalHinde'), 'Therese', 2);

-- 37. KayalJad
INSERT INTO families (family_name, link) VALUES ('Kayal', 'KayalJad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KayalJad'), 'Jad', 1),
  ((SELECT id FROM families WHERE link = 'KayalJad'), 'Sirine', 2);

-- 38. KayalZiad
INSERT INTO families (family_name, link) VALUES ('Kayal', 'KayalZiad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KayalZiad'), 'Ziad', 1),
  ((SELECT id FROM families WHERE link = 'KayalZiad'), 'Lara', 2);

-- 39. KayalMicha
INSERT INTO families (family_name, link) VALUES ('Kayal', 'KayalMicha');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KayalMicha'), 'Micha', 1);

-- 40. KayalFouad
INSERT INTO families (family_name, link) VALUES ('Kayal', 'KayalFouad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'KayalFouad'), 'Fouad', 1),
  ((SELECT id FROM families WHERE link = 'KayalFouad'), 'Clémentine', 2);

-- 41. JebranLinda
INSERT INTO families (family_name, link) VALUES ('Jebran', 'JebranLinda');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JebranLinda'), 'Linda', 1),
  ((SELECT id FROM families WHERE link = 'JebranLinda'), 'Joseph', 2);

-- 42. JebranMarwan
INSERT INTO families (family_name, link) VALUES ('Jebran', 'JebranMarwan');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JebranMarwan'), 'Marwan', 1),
  ((SELECT id FROM families WHERE link = 'JebranMarwan'), 'Sara', 2);

-- 43. JebranNicolas
INSERT INTO families (family_name, link) VALUES ('Jebran', 'JebranNicolas');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JebranNicolas'), 'Nicolas', 1);

-- 44. JebranZiad
INSERT INTO families (family_name, link) VALUES ('Jebran', 'JebranZiad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JebranZiad'), 'Ziad', 1),
  ((SELECT id FROM families WHERE link = 'JebranZiad'), 'Nadine', 2);

-- 45. TawkHabib
INSERT INTO families (family_name, link) VALUES ('Tawk', 'TawkHabib');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'TawkHabib'), 'Habib', 1),
  ((SELECT id FROM families WHERE link = 'TawkHabib'), 'Nancy', 2);

-- 46. ChahoudElie
INSERT INTO families (family_name, link) VALUES ('Chahoud', 'ChahoudElie');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ChahoudElie'), 'Elie', 1);

-- 47. JebranJacqueline
INSERT INTO families (family_name, link) VALUES ('Jebran', 'JebranJacqueline');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JebranJacqueline'), 'Bachir', 1),
  ((SELECT id FROM families WHERE link = 'JebranJacqueline'), 'Jacqueline', 2);

-- 48. MoslehCharbel
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehCharbel');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehCharbel'), 'Charbel', 1),
  ((SELECT id FROM families WHERE link = 'MoslehCharbel'), 'Amal', 2);

-- 49. MoslehAssaad
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehAssaad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehAssaad'), 'Assaad', 1),
  ((SELECT id FROM families WHERE link = 'MoslehAssaad'), 'Antoinette', 2);

-- 50. MoslehPierre
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehPierre');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehPierre'), 'Pierre', 1),
  ((SELECT id FROM families WHERE link = 'MoslehPierre'), 'Suzanne', 2),
  ((SELECT id FROM families WHERE link = 'MoslehPierre'), 'Rudy', 3);

-- 51. Roux
INSERT INTO families (family_name, link) VALUES ('Roux', 'Roux');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Roux'), 'Maeva', 1),
  ((SELECT id FROM families WHERE link = 'Roux'), 'Florent', 2);

-- 52. Sirault
INSERT INTO families (family_name, link) VALUES ('Sirault', 'Sirault');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Sirault'), 'Michelle', 1),
  ((SELECT id FROM families WHERE link = 'Sirault'), 'Benjamin', 2);

-- 53. ElKaraNada
INSERT INTO families (family_name, link) VALUES ('El Kara', 'ElKaraNada');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ElKaraNada'), 'Nada', 1);

-- 54. ElKaraElias
INSERT INTO families (family_name, link) VALUES ('El Kara', 'ElKaraElias');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ElKaraElias'), 'Elias', 1),
  ((SELECT id FROM families WHERE link = 'ElKaraElias'), 'Christina', 2);

-- 55. Fredoc
INSERT INTO families (family_name, link) VALUES ('Fredoc', 'Fredoc');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Fredoc'), 'Maguy', 1),
  ((SELECT id FROM families WHERE link = 'Fredoc'), 'Olivier', 2);

-- 56. Ziade
INSERT INTO families (family_name, link) VALUES ('Ziade', 'Ziade');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Ziade'), 'Jihad', 1),
  ((SELECT id FROM families WHERE link = 'Ziade'), 'Leyla', 2);

-- 57. Osmont
INSERT INTO families (family_name, link) VALUES ('Osmont', 'Osmont');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Osmont'), 'Stephane', 1),
  ((SELECT id FROM families WHERE link = 'Osmont'), 'Elianne', 2);

-- 58. MakdessiZiad
INSERT INTO families (family_name, link) VALUES ('Makdessi', 'MakdessiZiad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MakdessiZiad'), 'Ziad', 1),
  ((SELECT id FROM families WHERE link = 'MakdessiZiad'), 'Nour', 2);

-- 59. MakdessiTony
INSERT INTO families (family_name, link) VALUES ('Makdessi', 'MakdessiTony');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MakdessiTony'), 'Tony', 1),
  ((SELECT id FROM families WHERE link = 'MakdessiTony'), 'Gretta', 2),
  ((SELECT id FROM families WHERE link = 'MakdessiTony'), 'Christina', 3),
  ((SELECT id FROM families WHERE link = 'MakdessiTony'), 'Tarek', 4);

-- 60. HageJeffrey
INSERT INTO families (family_name, link) VALUES ('Hage', 'HageJeffrey');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HageJeffrey'), 'Jeffrey', 1),
  ((SELECT id FROM families WHERE link = 'HageJeffrey'), 'Jessy', 2);

-- 61. HageGaby
INSERT INTO families (family_name, link) VALUES ('Hage', 'HageGaby');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HageGaby'), 'Gaby', 1),
  ((SELECT id FROM families WHERE link = 'HageGaby'), 'Micheline', 2),
  ((SELECT id FROM families WHERE link = 'HageGaby'), 'Jenny', 3);

-- 62. Dirani
INSERT INTO families (family_name, link) VALUES ('Dirani', 'Dirani');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Dirani'), 'Jad', 1),
  ((SELECT id FROM families WHERE link = 'Dirani'), 'Maria', 2);

-- 63. Tabouni
INSERT INTO families (family_name, link) VALUES ('Tabouni', 'Tabouni');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Tabouni'), 'Elie', 1),
  ((SELECT id FROM families WHERE link = 'Tabouni'), 'Ghenwa', 2);

-- 64. Youssef
INSERT INTO families (family_name, link) VALUES ('Youssef', 'Youssef');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Youssef'), 'Patrick', 1);

-- 65. Chahine
INSERT INTO families (family_name, link) VALUES ('Chahine', 'Chahine');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Chahine'), 'Elie', 1),
  ((SELECT id FROM families WHERE link = 'Chahine'), 'Joelle', 2);

-- 66. Aoun
INSERT INTO families (family_name, link) VALUES ('Aoun', 'Aoun');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Aoun'), 'Marianne', 1),
  ((SELECT id FROM families WHERE link = 'Aoun'), 'Roudy', 2);

-- 67. Boustany
INSERT INTO families (family_name, link) VALUES ('Boustany', 'Boustany');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Boustany'), 'Nicolas', 1);

-- 68. Damaj
INSERT INTO families (family_name, link) VALUES ('Damaj', 'Damaj');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Damaj'), 'Najib', 1),
  ((SELECT id FROM families WHERE link = 'Damaj'), 'Rebecca', 2);

-- 69. Darwish
INSERT INTO families (family_name, link) VALUES ('Darwish', 'Darwish');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Darwish'), 'Sami', 1),
  ((SELECT id FROM families WHERE link = 'Darwish'), 'Elise', 2);

-- 70. AbouAbsi
INSERT INTO families (family_name, link) VALUES ('Abou absi', 'AbouAbsi');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbouAbsi'), 'Antony', 1);

-- 71. Bekhazi
INSERT INTO families (family_name, link) VALUES ('Bekhazi', 'Bekhazi');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Bekhazi'), 'Nadim', 1);

-- 72. Rizkallah
INSERT INTO families (family_name, link) VALUES ('Rizkallah', 'Rizkallah');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Rizkallah'), 'Marita', 1);

-- 73. Tabet
INSERT INTO families (family_name, link) VALUES ('Tabet', 'Tabet');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Tabet'), 'Roger', 1),
  ((SELECT id FROM families WHERE link = 'Tabet'), 'Joelle', 2);

-- 74. Wehbe
INSERT INTO families (family_name, link) VALUES ('Wehbe', 'Wehbe');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Wehbe'), 'Elie', 1),
  ((SELECT id FROM families WHERE link = 'Wehbe'), 'Sandy', 2);

-- 75. ElGhoul
INSERT INTO families (family_name, link) VALUES ('El Ghoul', 'ElGhoul');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ElGhoul'), 'Ghassan', 1),
  ((SELECT id FROM families WHERE link = 'ElGhoul'), 'Michelle', 2);

-- 76. Hoyek
INSERT INTO families (family_name, link) VALUES ('Hoyek', 'Hoyek');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Hoyek'), 'Christophe', 1),
  ((SELECT id FROM families WHERE link = 'Hoyek'), 'Anna', 2);

-- 77. Antoun
INSERT INTO families (family_name, link) VALUES ('Antoun', 'Antoun');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Antoun'), 'Guillaume', 1),
  ((SELECT id FROM families WHERE link = 'Antoun'), 'Stephany', 2);

-- 78. ElHachem
INSERT INTO families (family_name, link) VALUES ('El Hachem', 'ElHachem');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ElHachem'), 'Roy', 1),
  ((SELECT id FROM families WHERE link = 'ElHachem'), 'Chloe', 2);

-- 79. MoslehRalph
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehRalph');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehRalph'), 'Ralph', 1),
  ((SELECT id FROM families WHERE link = 'MoslehRalph'), 'Rima', 2);

-- 80. ElHachemRamy
INSERT INTO families (family_name, link) VALUES ('El Hachem', 'ElHachemRamy');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ElHachemRamy'), 'Ramy', 1);

-- 81. ManakTaoufik
INSERT INTO families (family_name, link) VALUES ('Manak', 'ManakTaoufik');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'ManakTaoufik'), 'Taoufik', 1);

-- 82. AbiRachedJoey
INSERT INTO families (family_name, link) VALUES ('AbiRached', 'AbiRachedJoey');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AbiRachedJoey'), 'Joey', 1),
  ((SELECT id FROM families WHERE link = 'AbiRachedJoey'), 'Laeticia', 2);

-- 83. Yammine
INSERT INTO families (family_name, link) VALUES ('Yammine', 'Yammine');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Yammine'), 'Michel', 1),
  ((SELECT id FROM families WHERE link = 'Yammine'), 'Katia', 2);

-- 84. Nakad
INSERT INTO families (family_name, link) VALUES ('Nakad', 'Nakad');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Nakad'), 'Ziad', 1),
  ((SELECT id FROM families WHERE link = 'Nakad'), 'Jackie', 2);

-- 85. Nahas
INSERT INTO families (family_name, link) VALUES ('Nahas', 'Nahas');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Nahas'), 'Joudy', 1);

-- 86. Rifai
INSERT INTO families (family_name, link) VALUES ('Rifai', 'Rifai');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Rifai'), 'Rabih', 1),
  ((SELECT id FROM families WHERE link = 'Rifai'), 'Sirine', 2);

-- 87. MoslehMark
INSERT INTO families (family_name, link) VALUES ('Mosleh', 'MoslehMark');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'MoslehMark'), 'Mark', 1),
  ((SELECT id FROM families WHERE link = 'MoslehMark'), 'Hala', 2);

-- 88. NajemRodolphe
INSERT INTO families (family_name, link) VALUES ('Najem', 'NajemRodolphe');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'NajemRodolphe'), 'Rodolphe', 1);

-- 89. Hourani
INSERT INTO families (family_name, link) VALUES ('Hourani', 'Hourani');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Hourani'), 'Noel', 1),
  ((SELECT id FROM families WHERE link = 'Hourani'), 'Micheline', 2);

-- 90. Jumblat
INSERT INTO families (family_name, link) VALUES ('Jumblat', 'Jumblat');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Jumblat'), 'Said', 1),
  ((SELECT id FROM families WHERE link = 'Jumblat'), 'Chloé', 2);

-- 91. Elias
INSERT INTO families (family_name, link) VALUES ('Elias', 'Elias');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Elias'), 'Liliane', 1),
  ((SELECT id FROM families WHERE link = 'Elias'), 'Georges', 2);

-- 92. Lacorcia
INSERT INTO families (family_name, link) VALUES ('Lacorcia', 'Lacorcia');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Lacorcia'), 'Marc', 1),
  ((SELECT id FROM families WHERE link = 'Lacorcia'), 'Jack', 2),
  ((SELECT id FROM families WHERE link = 'Lacorcia'), 'Max', 3),
  ((SELECT id FROM families WHERE link = 'Lacorcia'), 'Luke', 4);

-- 93. FarahArlette
INSERT INTO families (family_name, link) VALUES ('Farah', 'FarahArlette');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'FarahArlette'), 'Arlette', 1);

-- 94. FarahMia
INSERT INTO families (family_name, link) VALUES ('Farah', 'FarahMia');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'FarahMia'), 'Mia', 1),
  ((SELECT id FROM families WHERE link = 'FarahMia'), 'Maroun', 2);

-- 95. FarahSamer
INSERT INTO families (family_name, link) VALUES ('Farah', 'FarahSamer');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'FarahSamer'), 'Samer', 1),
  ((SELECT id FROM families WHERE link = 'FarahSamer'), 'Marie-Claire', 2);

-- 96. Helou
INSERT INTO families (family_name, link) VALUES ('Helou', 'Helou');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Helou'), 'Paul', 1),
  ((SELECT id FROM families WHERE link = 'Helou'), 'Katia', 2),
  ((SELECT id FROM families WHERE link = 'Helou'), 'Paulina', 3),
  ((SELECT id FROM families WHERE link = 'Helou'), 'Lucciano', 4);

-- 97. Matar
INSERT INTO families (family_name, link) VALUES ('Matar', 'Matar');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Matar'), 'Bassam', 1),
  ((SELECT id FROM families WHERE link = 'Matar'), 'Dolly', 2),
  ((SELECT id FROM families WHERE link = 'Matar'), 'David', 3),
  ((SELECT id FROM families WHERE link = 'Matar'), 'Christelle', 4);

-- 98. Khoury
INSERT INTO families (family_name, link) VALUES ('Khoury', 'Khoury');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Khoury'), 'Tony', 1),
  ((SELECT id FROM families WHERE link = 'Khoury'), 'Tania', 2),
  ((SELECT id FROM families WHERE link = 'Khoury'), 'Charbel', 3),
  ((SELECT id FROM families WHERE link = 'Khoury'), 'Tatiana', 4);

-- 99. Harika
INSERT INTO families (family_name, link) VALUES ('Harika', 'Harika');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Harika'), 'Issam', 1),
  ((SELECT id FROM families WHERE link = 'Harika'), 'Hoda', 2);

-- 100. Daher
INSERT INTO families (family_name, link) VALUES ('Daher', 'Daher');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Daher'), 'Tony', 1),
  ((SELECT id FROM families WHERE link = 'Daher'), 'Nelly', 2);

-- 101. Nseir
INSERT INTO families (family_name, link) VALUES ('Nseir', 'Nseir');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Nseir'), 'Tina', 1);

-- 102. Hanna
INSERT INTO families (family_name, link) VALUES ('Hanna', 'Hanna');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Hanna'), 'Nicole', 1),
  ((SELECT id FROM families WHERE link = 'Hanna'), 'Luke', 2);

-- 103. Grec
INSERT INTO families (family_name, link) VALUES ('Grec', 'Grec');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Grec'), 'Liliane', 1),
  ((SELECT id FROM families WHERE link = 'Grec'), 'Roger', 2);

-- 104. Bechwati
INSERT INTO families (family_name, link) VALUES ('Bechwati', 'Bechwati');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Bechwati'), 'Nicolas', 1),
  ((SELECT id FROM families WHERE link = 'Bechwati'), 'Jihane', 2),
  ((SELECT id FROM families WHERE link = 'Bechwati'), 'Gabriella', 3),
  ((SELECT id FROM families WHERE link = 'Bechwati'), 'Isabella', 4),
  ((SELECT id FROM families WHERE link = 'Bechwati'), 'Nicolas', 5);

-- 105. Panayotou
INSERT INTO families (family_name, link) VALUES ('Panayotou', 'Panayotou');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Panayotou'), 'Narimane', 1),
  ((SELECT id FROM families WHERE link = 'Panayotou'), 'Troy', 2),
  ((SELECT id FROM families WHERE link = 'Panayotou'), 'Nino', 3)
  ((SELECT id FROM families WHERE link = 'Panayotou'), 'Nickitas', 4);

-- 106. HouraniNadia
INSERT INTO families (family_name, link) VALUES ('Hourani', 'HouraniNadia');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HouraniNadia'), 'Nadia', 1);

-- 107. HouraniEid
INSERT INTO families (family_name, link) VALUES ('Hourani', 'HouraniEid');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HouraniEid'), 'Eid', 1);

-- 108. HouraniGhenwa
INSERT INTO families (family_name, link) VALUES ('Hourani', 'HouraniGhenwa');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HouraniGhenwa'), 'Ghenwa', 1),
  ((SELECT id FROM families WHERE link = 'HouraniGhenwa'), 'Stephanie', 2);

-- 109. HobeikaJean
INSERT INTO families (family_name, link) VALUES ('Hobeika', 'HobeikaJean');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'HobeikaJean'), 'Jean', 1),
  ((SELECT id FROM families WHERE link = 'HobeikaJean'), 'Randa', 2),
  ((SELECT id FROM families WHERE link = 'HobeikaJean'), 'Jean', 3);

-- 110. DagherZahi
INSERT INTO families (family_name, link) VALUES ('Dagher', 'DagherZahi');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'DagherZahi'), 'Zahi', 1),
  ((SELECT id FROM families WHERE link = 'DagherZahi'), 'Ghada', 2);

-- 111. Attieh
INSERT INTO families (family_name, link) VALUES ('Attieh', 'Attieh');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Attieh'), 'Georges', 1);

-- 112. AounPaul
INSERT INTO families (family_name, link) VALUES ('Aoun', 'AounPaul');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'AounPaul'), 'Paul', 1),
  ((SELECT id FROM families WHERE link = 'AounPaul'), 'Sarah', 2);

-- 113. Salem
INSERT INTO families (family_name, link) VALUES ('Salem', 'Salem');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Salem'), 'Michelle', 1),
  ((SELECT id FROM families WHERE link = 'Salem'), 'Ziad', 2);

-- 114. JumblatSaid
INSERT INTO families (family_name, link) VALUES ('Jumblat', 'JumblatSaid');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'JumblatSaid'), 'Said', 1),
  ((SELECT id FROM families WHERE link = 'JumblatSaid'), 'Jamal', 2);

-- 115. Touma
INSERT INTO families (family_name, link) VALUES ('Touma', 'Touma');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Touma'), 'Marcelle', 1),
  ((SELECT id FROM families WHERE link = 'Touma'), 'Nadim', 2);

-- 116. Chaftari
INSERT INTO families (family_name, link) VALUES ('Chaftari', 'Chaftari');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Chaftari'), 'Marie', 1),
  ((SELECT id FROM families WHERE link = 'Chaftari'), 'Assaad', 2);

-- 117. Petersen
INSERT INTO families (family_name, link) VALUES ('Petersen', 'Petersen');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE link = 'Petersen'), 'Josette', 1),
  ((SELECT id FROM families WHERE link = 'Petersen'), 'Barry', 2);
