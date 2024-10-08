PGDMP      /        	        |            postgres    16.3    16.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE postgres;
                postgres    false            !           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    5152                        2615    17585    paciente    SCHEMA        CREATE SCHEMA paciente;
    DROP SCHEMA paciente;
                postgres    false            g           1259    17605 
   enfermeiro    TABLE     �   CREATE TABLE paciente.enfermeiro (
    id bigint NOT NULL,
    cpf character varying NOT NULL,
    senha character varying,
    nome character varying
);
     DROP TABLE paciente.enfermeiro;
       paciente         heap    postgres    false    8            f           1259    17604    enfermeiro_id_seq    SEQUENCE     |   CREATE SEQUENCE paciente.enfermeiro_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE paciente.enfermeiro_id_seq;
       paciente          postgres    false    359    8            "           0    0    enfermeiro_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE paciente.enfermeiro_id_seq OWNED BY paciente.enfermeiro.id;
          paciente          postgres    false    358            i           1259    17616    medico    TABLE     �   CREATE TABLE paciente.medico (
    id bigint NOT NULL,
    cpf character varying NOT NULL,
    senha character varying,
    nome character varying
);
    DROP TABLE paciente.medico;
       paciente         heap    postgres    false    8            h           1259    17615    medico_id_seq    SEQUENCE     x   CREATE SEQUENCE paciente.medico_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE paciente.medico_id_seq;
       paciente          postgres    false    361    8            #           0    0    medico_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE paciente.medico_id_seq OWNED BY paciente.medico.id;
          paciente          postgres    false    360            e           1259    17587    paciente    TABLE     �   CREATE TABLE paciente.paciente (
    id bigint NOT NULL,
    nome character varying NOT NULL,
    cpf character varying NOT NULL,
    uf character varying NOT NULL,
    nascimento date,
    peso numeric,
    altura numeric
);
    DROP TABLE paciente.paciente;
       paciente         heap    postgres    false    8            d           1259    17586    paciente_id_seq    SEQUENCE     z   CREATE SEQUENCE paciente.paciente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE paciente.paciente_id_seq;
       paciente          postgres    false    357    8            $           0    0    paciente_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE paciente.paciente_id_seq OWNED BY paciente.paciente.id;
          paciente          postgres    false    356            x           2604    17608    enfermeiro id    DEFAULT     r   ALTER TABLE ONLY paciente.enfermeiro ALTER COLUMN id SET DEFAULT nextval('paciente.enfermeiro_id_seq'::regclass);
 >   ALTER TABLE paciente.enfermeiro ALTER COLUMN id DROP DEFAULT;
       paciente          postgres    false    359    358    359            y           2604    17619 	   medico id    DEFAULT     j   ALTER TABLE ONLY paciente.medico ALTER COLUMN id SET DEFAULT nextval('paciente.medico_id_seq'::regclass);
 :   ALTER TABLE paciente.medico ALTER COLUMN id DROP DEFAULT;
       paciente          postgres    false    361    360    361            w           2604    17590    paciente id    DEFAULT     n   ALTER TABLE ONLY paciente.paciente ALTER COLUMN id SET DEFAULT nextval('paciente.paciente_id_seq'::regclass);
 <   ALTER TABLE paciente.paciente ALTER COLUMN id DROP DEFAULT;
       paciente          postgres    false    357    356    357                      0    17605 
   enfermeiro 
   TABLE DATA           <   COPY paciente.enfermeiro (id, cpf, senha, nome) FROM stdin;
    paciente          postgres    false    359   <                 0    17616    medico 
   TABLE DATA           8   COPY paciente.medico (id, cpf, senha, nome) FROM stdin;
    paciente          postgres    false    361   �                 0    17587    paciente 
   TABLE DATA           Q   COPY paciente.paciente (id, nome, cpf, uf, nascimento, peso, altura) FROM stdin;
    paciente          postgres    false    357   n        %           0    0    enfermeiro_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('paciente.enfermeiro_id_seq', 10, true);
          paciente          postgres    false    358            &           0    0    medico_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('paciente.medico_id_seq', 1, true);
          paciente          postgres    false    360            '           0    0    paciente_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('paciente.paciente_id_seq', 16, true);
          paciente          postgres    false    356                       2606    17612    enfermeiro enfermeiro_pk 
   CONSTRAINT     X   ALTER TABLE ONLY paciente.enfermeiro
    ADD CONSTRAINT enfermeiro_pk PRIMARY KEY (id);
 D   ALTER TABLE ONLY paciente.enfermeiro DROP CONSTRAINT enfermeiro_pk;
       paciente            postgres    false    359            �           2606    17614    enfermeiro enfermeiro_unique 
   CONSTRAINT     X   ALTER TABLE ONLY paciente.enfermeiro
    ADD CONSTRAINT enfermeiro_unique UNIQUE (cpf);
 H   ALTER TABLE ONLY paciente.enfermeiro DROP CONSTRAINT enfermeiro_unique;
       paciente            postgres    false    359            �           2606    17623    medico medico_pk_1 
   CONSTRAINT     R   ALTER TABLE ONLY paciente.medico
    ADD CONSTRAINT medico_pk_1 PRIMARY KEY (id);
 >   ALTER TABLE ONLY paciente.medico DROP CONSTRAINT medico_pk_1;
       paciente            postgres    false    361            �           2606    17625    medico medico_unique_1 
   CONSTRAINT     R   ALTER TABLE ONLY paciente.medico
    ADD CONSTRAINT medico_unique_1 UNIQUE (cpf);
 B   ALTER TABLE ONLY paciente.medico DROP CONSTRAINT medico_unique_1;
       paciente            postgres    false    361            {           2606    17594    paciente paciente_pk 
   CONSTRAINT     T   ALTER TABLE ONLY paciente.paciente
    ADD CONSTRAINT paciente_pk PRIMARY KEY (id);
 @   ALTER TABLE ONLY paciente.paciente DROP CONSTRAINT paciente_pk;
       paciente            postgres    false    357            }           2606    17596    paciente paciente_unique 
   CONSTRAINT     T   ALTER TABLE ONLY paciente.paciente
    ADD CONSTRAINT paciente_unique UNIQUE (cpf);
 D   ALTER TABLE ONLY paciente.paciente DROP CONSTRAINT paciente_unique;
       paciente            postgres    false    357               �   x��IA ����Í�|����TdE����,)�0�$9����6nt���BYr�ö';�.*��)��2��l��/����D�X*�8��tsN��rH0�b�KAnEz[<�mdL��L��������5�         �   x��IA ����Í�|����TdE����,)�0�$9����6nt���BYr�ö';�.*��)��2��l��/����D�X*�8��tsN��rH0�b�KAnEz[<�mdL��L��������5�         �  x�MU[�k�	��w.AA0�����?��Ӊ�#Y�-��z:�|>-��$G�S�_z�xm�[_�ǻv�J�ҷy�6�ש�?	��ʡ����|]6�syg/_�.���2I�O�l�<���Pg}s�N�a����z�,Tq_�{��\�N6�9ߢ���E���o<����vʡ�7w&Iq�y��$~���ûs����1��R�u�]W�)�G&�ɥ�ۯ�����~v��s��ֱ���ϛ\}@�u��]����_b�a{[����g����Q��P1�]�^�*V�&	�5���9_,�ؒmt�c���?�%P�Ą��B�p��ޠ�U,���,+\�cv>)����go����[?
����󞙤�-���d{G��/�ଯ���ZW��t�l���'-�� ����Z�Z>쐏w,����#'pj�>.Le���͕����� �v�"Y��`Js�G�Nr_�y?��J�ףP5�ub�%�ك=��l���Ӕ���񐛤���#�S�CAۀ�¡Gu?�����Y�bZ��v�k���"9�؂���3Dӽ��� 1��R����le:�t�����j~�q��,�:�q����=�М� �H���;�Gq���|�
�����fpt�G�>qs -�!����i�������9���{�� 1P�V��������l�dT�%j �L�Ŀ��o��C���i䪭�]�pKm~�3%Hq�hƮ\��B=w!z�_}їȉ_#���AXqCi�-BahKT����YL�B`[�C���:ͤ�ц6�vd���s>J�.��2��N`�#w�zS�M��=�j]�l1·�ٸ�W
r0k;�(�B��K�W�+ht�s��W��kp�ar�.^���g���Յ�9�O ~���*�dx�����?���U��     