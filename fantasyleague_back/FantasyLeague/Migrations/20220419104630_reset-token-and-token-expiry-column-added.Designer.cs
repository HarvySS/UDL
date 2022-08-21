﻿// <auto-generated />
using System;
using Fantasy_League.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FantasyLeague.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220419104630_reset-token-and-token-expiry-column-added")]
    partial class resettokenandtokenexpirycolumnadded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.15");

            modelBuilder.Entity("Fantasy_League.Models.Match", b =>
                {
                    b.Property<int>("match_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Team1_id")
                        .HasColumnType("int");

                    b.Property<int>("Team2_id")
                        .HasColumnType("int");

                    b.Property<int>("created_by")
                        .HasColumnType("int");

                    b.Property<DateTime>("created_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("deleted_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("deleted_date")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("is_active")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool?>("is_draw")
                        .HasColumnType("tinyint(1)");

                    b.Property<DateTime>("match_date")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("season")
                        .HasColumnType("longtext");

                    b.Property<int?>("team1_goals")
                        .HasColumnType("int");

                    b.Property<int?>("team1_points")
                        .HasColumnType("int");

                    b.Property<int?>("team2_goals")
                        .HasColumnType("int");

                    b.Property<int?>("team2_points")
                        .HasColumnType("int");

                    b.Property<int?>("updated_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("updated_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("won_id")
                        .HasColumnType("int");

                    b.HasKey("match_id");

                    b.HasIndex("Team1_id");

                    b.HasIndex("Team2_id");

                    b.ToTable("Match");
                });

            modelBuilder.Entity("Fantasy_League.Models.MatchPrediction", b =>
                {
                    b.Property<int>("match_prediction_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("created_by")
                        .HasColumnType("int");

                    b.Property<DateTime>("created_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("deleted_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("deleted_date")
                        .HasColumnType("datetime(6)");

                    b.Property<bool>("is_active")
                        .HasColumnType("tinyint(1)");

                    b.Property<int>("match_id")
                        .HasColumnType("int");

                    b.Property<DateTime>("prediction_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("updated_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("updated_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("user_id")
                        .HasColumnType("int");

                    b.Property<int>("user_points")
                        .HasColumnType("int");

                    b.Property<int?>("user_team1_score")
                        .HasColumnType("int");

                    b.Property<int?>("user_team2_score")
                        .HasColumnType("int");

                    b.HasKey("match_prediction_id");

                    b.HasIndex("user_id");

                    b.ToTable("MatchPrediction");
                });

            modelBuilder.Entity("Fantasy_League.Models.Team", b =>
                {
                    b.Property<int>("team_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("created_by")
                        .HasColumnType("int");

                    b.Property<DateTime>("created_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("deleted_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("deleted_date")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("description")
                        .HasColumnType("longtext");

                    b.Property<bool>("is_active")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("logo_path")
                        .HasColumnType("longtext");

                    b.Property<string>("page_content")
                        .HasColumnType("longtext");

                    b.Property<string>("team_name")
                        .HasColumnType("longtext");

                    b.Property<int?>("updated_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("updated_date")
                        .HasColumnType("datetime(6)");

                    b.HasKey("team_id");

                    b.ToTable("Team");
                });

            modelBuilder.Entity("Fantasy_League.Models.Users", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("created_by")
                        .HasColumnType("int");

                    b.Property<DateTime>("created_date")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("deleted_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("deleted_date")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("email")
                        .HasColumnType("longtext");

                    b.Property<string>("first_name")
                        .HasColumnType("longtext");

                    b.Property<bool>("is_active")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("last_name")
                        .HasColumnType("longtext");

                    b.Property<string>("password")
                        .HasColumnType("longtext");

                    b.Property<string>("reset_token")
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("token_expiry")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("updated_by")
                        .HasColumnType("int");

                    b.Property<DateTime?>("updated_date")
                        .HasColumnType("datetime(6)");

                    b.HasKey("id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Fantasy_League.Models.Match", b =>
                {
                    b.HasOne("Fantasy_League.Models.Team", "team1")
                        .WithMany()
                        .HasForeignKey("Team1_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Fantasy_League.Models.Team", "team2")
                        .WithMany()
                        .HasForeignKey("Team2_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("team1");

                    b.Navigation("team2");
                });

            modelBuilder.Entity("Fantasy_League.Models.MatchPrediction", b =>
                {
                    b.HasOne("Fantasy_League.Models.Users", "User")
                        .WithMany("matchPredictions")
                        .HasForeignKey("user_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Fantasy_League.Models.Users", b =>
                {
                    b.Navigation("matchPredictions");
                });
#pragma warning restore 612, 618
        }
    }
}