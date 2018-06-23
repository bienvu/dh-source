<?php
/**
 * Template Name: Basic Page
 *
 * @package WordPress
 * @subpackage PDJ
 * @since PDJ 1.0
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['title_option'] = framework_page('title');

Timber::render( 'page-basic.twig', $context );