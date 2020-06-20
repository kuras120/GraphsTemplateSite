DELETE FROM storage_graph;
DELETE FROM storage_data;
INSERT INTO storage_graph (id, name, sub_name, description, type, creation_date, x_label, y_label)
VALUES (1, 'Wycieczki', 'Jazda na rowerze', 'Górska wycieczka - test prędkości',
        'Line', '2014-10-23 15:21:07', 'czas', 'prędkość'),
       (2, 'Algorytm wyżarzania', 'Instancja gr70', 'Algorytm symulowanego wyżarzania dla problemu komiwojażera',
        'Line', '2017-06-13 12:00:01', 'iteracja', 'koszt'),
       (3, 'Algorytm wyżarzania', 'Instancja gr120', 'Algorytm symulowanego wyżarzania dla problemu komiwojażera',
        'Line', '2016-12-30 21:46:12', 'iteracja', 'koszt');
INSERT INTO storage_data (id, key, value, graph_id)
VALUES (1, 1.5, 3, 1),
       (2, 3, 5.2, 1),
       (3, 5.5, 4.3, 1),
       (4, 6, 2, 1),
       (5, 10, 0, 1),
       (6, 1, 9981, 2),
       (7, 2, 7605, 2),
       (8, 3, 7701, 2),
       (9, 4, 5902, 2),
       (10, 5, 6902, 2),
       (11, 1, 25000, 3),
       (12, 2, 24451, 3),
       (13, 3, 28000, 3),
       (14, 4, 15043, 3),
       (15, 5, 11321, 3),
       (16, 6, 21368, 3),
       (17, 7, 11321, 3),
       (18, 8, 11321, 3),
       (19, 6, 6312, 2),
       (20, 7, 6012, 2),
       (21, 8, 5931, 2);
